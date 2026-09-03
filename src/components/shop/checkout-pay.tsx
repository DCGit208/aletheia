"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { isLiveCheckout } from "@/lib/commerce/mode";
import {
  formatMomoXaf,
  isMomoEligibleCart,
  MOMO_PAYEES,
  type MomoNetwork,
} from "@/lib/commerce/offerings";
import { submitManualMomoPayment } from "@/lib/commerce/momo-client";
import { useAuth } from "@/lib/auth/provider";
import { useI18n } from "@/lib/i18n/provider";
import { useUserLibrary } from "@/lib/state/user-library";
import { cn } from "@/lib/utils";

export function CheckoutPay() {
  const { t } = useI18n();
  const { user } = useAuth();
  const { cart, pay, clearCart } = useUserLibrary();
  const live = isLiveCheckout(user);
  const momoOk = live && isMomoEligibleCart(cart);
  const [method, setMethod] = useState<"card" | "momo">("card");
  const [network, setNetwork] = useState<MomoNetwork>("mtn");
  const [phone, setPhone] = useState("");
  const [pending, setPending] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  const payee = MOMO_PAYEES[network];

  const payCard = () => {
    setPending(true);
    void pay()
      .then((order) => {
        if (order) toast.success(t("shop.orderPlaced"));
        else if (live) toast.message(t("shop.redirecting"));
      })
      .catch((error) => {
        toast.error(error instanceof Error ? error.message : t("shop.payFailed"));
      })
      .finally(() => setPending(false));
  };

  const payMomo = () => {
    const productId = cart[0];
    if (!productId) return;
    setPending(true);
    void submitManualMomoPayment({ productId, phone, network })
      .then((result) => {
        setReference(result.reference);
        clearCart();
        toast.success(t("shop.momoRecorded"));
      })
      .catch((error) => {
        toast.error(error instanceof Error ? error.message : t("shop.payFailed"));
      })
      .finally(() => setPending(false));
  };

  if (reference) {
    return (
      <div className="mt-4 rounded-2xl bg-muted px-4 py-4">
        <p className="text-sm">{t("shop.momoSubmitted")}</p>
        <p className="mt-2 font-heading text-2xl tracking-wide">{reference}</p>
        <p className="mt-2 text-sm text-muted-foreground">{t("shop.momoWait")}</p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      {momoOk ? (
        <div className="mb-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            className={cn(
              "h-11 rounded-full text-sm font-medium",
              method === "card" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
            )}
            onClick={() => setMethod("card")}
          >
            {t("shop.methodCard")}
          </button>
          <button
            type="button"
            className={cn(
              "h-11 rounded-full text-sm font-medium",
              method === "momo" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
            )}
            onClick={() => setMethod("momo")}
          >
            {t("shop.methodMomo")}
          </button>
        </div>
      ) : null}

      {momoOk && method === "momo" ? (
        <div>
          <p className="text-sm text-muted-foreground">{t("shop.momoLead")}</p>
          <p className="mt-2 text-sm">{t("shop.momoUsdNote")}</p>
          <fieldset className="mt-4">
            <legend className="mb-2 text-sm font-medium">{t("shop.momoNetwork")}</legend>
            <div className="grid grid-cols-2 gap-2">
              {(["mtn", "orange"] as const).map((item) => (
                <label
                  key={item}
                  className={cn(
                    "flex h-11 cursor-pointer items-center justify-center rounded-full text-sm",
                    network === item ? "bg-primary text-primary-foreground" : "bg-muted",
                  )}
                >
                  <input
                    type="radio"
                    name="momo-network"
                    className="sr-only"
                    checked={network === item}
                    onChange={() => setNetwork(item)}
                  />
                  {item === "mtn" ? t("shop.momoMtn") : t("shop.momoOrange")}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="mt-4 rounded-2xl bg-muted px-4 py-3 text-sm">
            <p className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">{t("shop.momoSendTo")}</p>
            <p className="mt-1 font-heading text-2xl tracking-wide">{payee.number}</p>
            <p className="mt-1">{payee.name}</p>
            <p className="mt-1 text-muted-foreground">
              {t("shop.momoAmount")} · {t("shop.momoUssd")} {payee.ussd}
            </p>
          </div>
          <div className="mt-4 space-y-2">
            <Label htmlFor="momo-phone">{t("shop.momoPhone")}</Label>
            <Input
              id="momo-phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="237…"
              className="h-11 rounded-xl"
            />
            <p className="text-xs text-muted-foreground">{t("shop.momoPhoneHint")}</p>
          </div>
          <Button
            type="button"
            size="lg"
            className="mt-4 h-11 w-full justify-center rounded-full"
            disabled={pending || phone.replace(/\D/g, "").length < 9}
            onClick={payMomo}
          >
            {t("shop.momoSubmit")} {formatMomoXaf()}
          </Button>
        </div>
      ) : (
        <>
          <Button
            type="button"
            size="lg"
            className="h-11 w-full justify-center rounded-full"
            disabled={pending}
            onClick={payCard}
          >
            {live ? t("action.payCard") : t("action.checkout")}
          </Button>
          {live ? <p className="mt-3 text-sm text-muted-foreground">{t("shop.payCardHint")}</p> : null}
          {!live ? <p className="mt-3 text-sm text-muted-foreground">{t("shop.payLocalHint")}</p> : null}
          {live && !momoOk && cart.some((id) => id.startsWith("product-foundation-")) ? (
            <p className="mt-2 text-sm text-muted-foreground">{t("shop.momoOnlyYear")}</p>
          ) : null}
        </>
      )}
    </div>
  );
}
