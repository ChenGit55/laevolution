"use client";

import "./checkout.css";
import { PayPal } from "@/components/PyaPal";
import { useState } from "react";

export default function PaymentCheckout() {
  const [price, setPrice] = useState("10");

  // get the price
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const selectedPrice = e.target.value;
    setPrice(selectedPrice);
  };

  console.log(price);

  // useEffect(() => {}, [price]);

  return (
    <main>
      <h1>Checkout</h1>
      <h2>Confirm your plan</h2>
      <input type="text" style={{ color: "black" }} value={price} readOnly />
      <select
        className="program mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        name="program"
        id="program"
        value={price}
        onChange={handleChange}
      >
        <option value="--">--</option>
        <option value="120">Private Training</option>
        <option value="45">Grupo session (4 players minimum)</option>
        <option value="395">Camp (week)</option>
        <option value="420">Birthday Party </option>
      </select>
      <PayPal totalPrice={price} />
    </main>
  );
}
