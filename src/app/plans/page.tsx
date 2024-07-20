"use client";
import "./plans.css";
import { PlanCard } from "@/components/PlanCard";
import { PayPal } from "@/components/PyaPal";
import { useState } from "react";

export default function Plans() {
  const [price, setPrice] = useState("");
  const [priceDisplay, setPriceDisplay] = useState("");

  const handleSelectPrice = (e: { currentTarget: any }) => {
    const selectedPrice = e.currentTarget.getAttribute("data-price");
    setPrice(selectedPrice);
    setPriceDisplay(selectedPrice);
    console.log(price, typeof price, priceDisplay, typeof priceDisplay);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceDisplay(e.target.value);
  };

  const value = priceDisplay;

  return (
    <div>
      <h1>Schedule LA Evoltuion coach.</h1>
      <div className="flex justify-center text-black  w-full bg-red-500">
        <input
          name="priceInput"
          type="text"
          value={priceDisplay}
          onChange={handleChange}
        />
      </div>
      <div className="plan-cards-container">
        <PlanCard.Root
          title="Private Training"
          price="120"
          onClick={handleSelectPrice}
        >
          <PlanCard.LineInfo textInfo="info 1" />
        </PlanCard.Root>
      </div>
      <div className="paypal-container">
        <PayPal totalPrice={value} />
      </div>
    </div>
  );
}
