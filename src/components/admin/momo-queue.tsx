"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatMomoXaf } from "@/lib/commerce/offerings";
import {
  confirmManualMomoPayment,
  listPendingManualPayments,
  rejectManualMomoPayment,
  type ManualPaymentRow,
} from "@/lib/commerce/momo-client";
import { useI18n } from "@/lib/i18n/provider";

export function MomoQueue() {
  const { t } = useI18n();
  const [payments, setPayments] = useState<ManualPaymentRow[] | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const refresh = useCallback(() => {
    void listPendingManualPayments()
      .then(setPayments)
      .catch(() => setPayments([]));
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const confirm = (paymentId: string) => {
    setBusyId(paymentId);
    void confirmManualMomoPayment(paymentId)
      .then(() => {
        toast.success(t("admin.momoConfirmed"));
        setPayments((current) => (current ?? []).filter((item) => item.id !== paymentId));
      })
      .catch((error) => {
        toast.error(error instanceof Error ? error.message : t("state.error"));
      })
      .finally(() => setBusyId(null));
  };

  return (
    <section className="mt-10">
      <h2 className="font-heading text-xl">{t("admin.momoTitle")}</h2>
      {payments === null ? (
        <p className="mt-3 text-sm text-muted-foreground">{t("state.loading")}</p>
      ) : payments.length === 0 ? (
        <p className="mt-3 text-sm text-muted-foreground">{t("admin.momoEmpty")}</p>
      ) : (
        <ul className="mt-4 space-y-3">
          {payments.map((payment) => (
            <li key={payment.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">{payment.productTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    {payment.reference} · {formatMomoXaf(payment.amountXaf)} · {payment.network.toUpperCase()}
                  </p>
                  <p>{payment.email}</p>
                  <p>{payment.phone}</p>
                  {payment.createdAt ? (
                    <p className="text-muted-foreground">{new Date(payment.createdAt).toLocaleString()}</p>
                  ) : null}
                  <div className="flex flex-wrap gap-2">
                  <Button
                    type="button"
                    className="mt-2"
                    disabled={busyId === payment.id}
                    onClick={() => confirm(payment.id)}
                  >
                    {t("admin.momoConfirm")}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-2"
                    disabled={busyId === payment.id}
                    onClick={() => {
                      setBusyId(payment.id);
                      void rejectManualMomoPayment(payment.id)
                        .then(() => {
                          toast.success(t("admin.momoRejected"));
                          setPayments((current) => (current ?? []).filter((item) => item.id !== payment.id));
                        })
                        .catch((error) => {
                          toast.error(error instanceof Error ? error.message : t("state.error"));
                        })
                        .finally(() => setBusyId(null));
                    }}
                  >
                    {t("admin.momoReject")}
                  </Button>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
