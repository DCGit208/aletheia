"use client";

import { createContext, useContext, useMemo, useSyncExternalStore, type ReactNode } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase/client";
import { isFirebaseConfigured } from "@/lib/firebase/config";
import {
  authenticateLocal,
  loadLocalSession,
  registerLocal,
  saveLocalSession,
  type SessionUser,
} from "@/lib/auth/session";
import { createClientStore } from "@/lib/storage/client-store";
import { isLocalDemoModeEnabled } from "@/lib/firebase/config";
import type { UserRole } from "@/lib/data/types";

interface AuthContextValue {
  user: SessionUser | null;
  loading: boolean;
  configured: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  requestPasswordReset: (email: string) => Promise<void>;
  signUp: (input: { email: string; password: string; displayName: string }) => Promise<void>;
  signOut: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const localSessionStore = createClientStore<SessionUser | null>(loadLocalSession, saveLocalSession);

const firebaseUserStore = createClientStore<{ user: SessionUser | null; loading: boolean }>(
  () => ({ user: null, loading: isFirebaseConfigured() }),
  () => undefined,
);

if (typeof window !== "undefined" && isFirebaseConfigured()) {
  const auth = getFirebaseAuth();
  if (auth) {
    onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        firebaseUserStore.set({ user: null, loading: false });
        return;
      }
      await applyFirebaseUser(firebaseUser);
    });
  }
}

async function applyFirebaseUser(firebaseUser: import("firebase/auth").User, forceRefresh = false) {
  const token = await firebaseUser.getIdTokenResult(forceRefresh);
  firebaseUserStore.set({
    loading: false,
    user: {
      uid: firebaseUser.uid,
      email: firebaseUser.email ?? "",
      displayName: firebaseUser.displayName ?? firebaseUser.email ?? "Member",
      role: roleFromClaims(token.claims),
      source: "firebase",
    },
  });
  void ensurePrivateUser(
    firebaseUser.uid,
    firebaseUser.email ?? "",
    firebaseUser.displayName ?? firebaseUser.email ?? "Member",
  );
}

async function ensurePrivateUser(uid: string, email: string, displayName: string) {
  const db = getFirebaseDb();
  if (!db) return;
  const privateRef = doc(db, "usersPrivate", uid);
  const existing = await getDoc(privateRef);
  if (!existing.exists()) {
    await setDoc(privateRef, { email, createdAt: serverTimestamp() });
  }
  const profileRef = doc(db, "profiles", uid);
  const profile = await getDoc(profileRef);
  if (!profile.exists()) {
    await setDoc(profileRef, {
      displayName: displayName.slice(0, 80) || "Member",
      locale: "en",
    });
  }
}

function roleFromClaims(claims: Record<string, unknown> | undefined): UserRole {
  const role = claims?.aletheiaRole;
  if (
    role === "member" ||
    role === "student" ||
    role === "author" ||
    role === "contributor" ||
    role === "moderator" ||
    role === "administrator"
  ) {
    return role;
  }
  return "member";
}

async function refreshSession() {
  const auth = getFirebaseAuth();
  if (auth?.currentUser) await applyFirebaseUser(auth.currentUser, true);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const configured = isFirebaseConfigured();
  const demoModeEnabled = isLocalDemoModeEnabled();
  const localUser = useSyncExternalStore(
    localSessionStore.subscribe,
    localSessionStore.getSnapshot,
    () => null,
  );
  const firebaseState = useSyncExternalStore(
    firebaseUserStore.subscribe,
    firebaseUserStore.getSnapshot,
    firebaseUserStore.getServerSnapshot,
  );

  const user = configured ? firebaseState.user : demoModeEnabled ? localUser : null;
  const loading = configured ? firebaseState.loading : false;

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      configured,
      async signIn(email, password) {
        if (!configured) {
          if (!demoModeEnabled) {
            throw new Error(
              "Local demo sign-in is disabled. Provide Firebase credentials or set NEXT_PUBLIC_ENABLE_LOCAL_DEMO_MODE=true in local development only.",
            );
          }
          localSessionStore.set(authenticateLocal(email, password));
          return;
        }
        const auth = getFirebaseAuth();
        if (!auth) throw new Error("Firebase Auth is not available.");
        await signInWithEmailAndPassword(auth, email, password);
        if (auth.currentUser) await applyFirebaseUser(auth.currentUser, true);
      },
      async requestPasswordReset(email) {
        if (!configured) {
          throw new Error("Password reset requires a connected Firebase account.");
        }
        const auth = getFirebaseAuth();
        if (!auth) throw new Error("Firebase Auth is not available.");
        await sendPasswordResetEmail(auth, email);
      },
      async signUp(input) {
        if (!configured) {
          if (!demoModeEnabled) {
            throw new Error(
              "Local demo sign-up is disabled. Provide Firebase credentials or set NEXT_PUBLIC_ENABLE_LOCAL_DEMO_MODE=true in local development only.",
            );
          }
          localSessionStore.set(registerLocal(input));
          return;
        }
        const auth = getFirebaseAuth();
        if (!auth) throw new Error("Firebase Auth is not available.");
        const credential = await createUserWithEmailAndPassword(auth, input.email, input.password);
        await updateProfile(credential.user, { displayName: input.displayName });
      },
      async signOut() {
        if (!configured) {
          if (demoModeEnabled) localSessionStore.set(null);
          return;
        }
        const auth = getFirebaseAuth();
        if (auth) await firebaseSignOut(auth);
      },
      refreshSession,
    }),
    [configured, demoModeEnabled, loading, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
