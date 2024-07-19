"use client";
import "./plans.css";
import { PlanCard } from "@/components/PlanCard";
import { PayPal } from "@/components/PyaPal";
import { useState } from "react";

export default function Plans() {
  return (
    <div>
      <h1>Schedule time with us.</h1>
      <div className="plan-cards-container">
        <PlanCard.Root title="Private Training" price="120">
          <PlanCard.LineInfo textInfo="info 1" />
        </PlanCard.Root>
      </div>
      <div className="paypal-container">
        <PayPal totalPrice="10" />
      </div>
    </div>
  );
}
