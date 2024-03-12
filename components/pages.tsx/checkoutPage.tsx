"use client";
import { useState, useEffect } from "react";
import Header from "../header";

export default function CheckoutPage() {
  useEffect(() => {}, []);
  return (
    <section className="relative flex items-center h-screen w-full">
      <Header page={"Checkout"} />
    </section>
  );
}
