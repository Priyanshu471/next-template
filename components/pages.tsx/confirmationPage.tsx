"use client";
import { useState, useEffect } from "react";
import Header from "../header";

export default function ConfirmationPage() {
  useEffect(() => {}, []);
  return (
    <section className="relative flex items-center h-screen w-full">
      <Header page={"Confirmation"} />
    </section>
  );
}
