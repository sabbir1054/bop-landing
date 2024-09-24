"use client";

import { Suspense } from "react";
import PaymentMessage from "./PaymentMessage";

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading Payment...</div>}>
      <PaymentMessage />
    </Suspense>
  );
}
