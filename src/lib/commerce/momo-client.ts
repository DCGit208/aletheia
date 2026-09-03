import { httpsCallable } from "firebase/functions";
import { getFirebaseFunctions } from "@/lib/firebase/client";
import type { MomoNetwork } from "@/lib/commerce/offerings";

export interface ManualPaymentResult {
  success: true;
  paymentId: string;
  reference: string;
  alreadyOpen: boolean;
}

export interface ManualPaymentRow {
  id: string;
  uid: string;
  email: string;
  productId: string;
  productTitle: string;
  amountXaf: number;
  network: string;
  phone: string;
  reference: string;
  status: string;
  createdAt: string | null;
}

function functionsOrThrow() {
  const functions = getFirebaseFunctions();
  if (!functions) {
    throw new Error("Mobile Money requires a signed-in Aletheia account.");
  }
  return functions;
}

export async function submitManualMomoPayment(input: {
  productId: string;
  phone: string;
  network: MomoNetwork;
}): Promise<ManualPaymentResult> {
  const create = httpsCallable<
    { productId: string; phone: string; momo_network: MomoNetwork },
    ManualPaymentResult
  >(functionsOrThrow(), "createManualPayment");
  const result = await create({
    productId: input.productId,
    phone: input.phone,
    momo_network: input.network,
  });
  return result.data;
}

export async function listPendingManualPayments(): Promise<ManualPaymentRow[]> {
  const list = httpsCallable<Record<string, never>, { payments: ManualPaymentRow[] }>(
    functionsOrThrow(),
    "listManualPayments",
  );
  const result = await list({});
  return result.data.payments ?? [];
}

export async function confirmManualMomoPayment(paymentId: string): Promise<{ success: true; already: boolean }> {
  const confirm = httpsCallable<{ paymentId: string }, { success: true; already: boolean }>(
    functionsOrThrow(),
    "confirmManualPayment",
  );
  const result = await confirm({ paymentId });
  return result.data;
}
