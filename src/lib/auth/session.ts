import type { UserRole } from "@/lib/data/types";

export interface SessionUser {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  source: "firebase" | "local";
}

const KEY = "aletheia.session";

export const LOCAL_DEMO_USERS: Array<SessionUser & { password: string }> = [
  {
    uid: "local-member",
    email: "member@aletheia.local",
    displayName: "Member",
    role: "member",
    source: "local",
    password: "aletheia",
  },
  {
    uid: "local-admin",
    email: "admin@aletheia.local",
    displayName: "Administrator",
    role: "administrator",
    source: "local",
    password: "aletheia",
  },
];

export function loadLocalSession(): SessionUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as SessionUser) : null;
  } catch {
    return null;
  }
}

export function saveLocalSession(user: SessionUser | null) {
  if (!user) {
    window.localStorage.removeItem(KEY);
    return;
  }
  window.localStorage.setItem(KEY, JSON.stringify(user));
}

export function authenticateLocal(email: string, password: string): SessionUser {
  const known = LOCAL_DEMO_USERS.find((user) => user.email === email && user.password === password);
  if (known) {
    return {
      uid: known.uid,
      email: known.email,
      displayName: known.displayName,
      role: known.role,
      source: known.source,
    };
  }

  const stored = window.localStorage.getItem(`aletheia.localUsers`);
  const users = stored ? (JSON.parse(stored) as Array<SessionUser & { password: string }>) : [];
  const match = users.find((user) => user.email === email && user.password === password);
  if (!match) {
    throw new Error("Invalid email or password.");
  }
  return {
    uid: match.uid,
    email: match.email,
    displayName: match.displayName,
    role: match.role,
    source: match.source,
  };
}

export function registerLocal(input: { email: string; password: string; displayName: string }): SessionUser {
  const stored = window.localStorage.getItem(`aletheia.localUsers`);
  const users = stored ? (JSON.parse(stored) as Array<SessionUser & { password: string }>) : [];
  if (users.some((user) => user.email === input.email) || LOCAL_DEMO_USERS.some((user) => user.email === input.email)) {
    throw new Error("An account with that email already exists.");
  }
  const session: SessionUser & { password: string } = {
    uid: `local-${crypto.randomUUID()}`,
    email: input.email,
    displayName: input.displayName,
    role: "member",
    source: "local",
    password: input.password,
  };
  users.push(session);
  window.localStorage.setItem("aletheia.localUsers", JSON.stringify(users));
  return {
    uid: session.uid,
    email: session.email,
    displayName: session.displayName,
    role: session.role,
    source: session.source,
  };
}
