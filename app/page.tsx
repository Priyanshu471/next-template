"use client";
import CheckoutPage from "@/components/pages.tsx/checkoutPage";
import ConfirmationPage from "@/components/pages.tsx/confirmationPage";
import PaymentPage from "@/components/pages.tsx/paymentPage";
import useStep from "@/hooks/use-step";

export default function Home() {
  const { step } = useStep();
  return (
    <main className="flex justify-center items-center h-screen">
      {step === 1 && <CheckoutPage />}
      {step === 2 && <PaymentPage />}
      {step === 3 && <ConfirmationPage />}
    </main>
  );
}
