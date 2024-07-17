"use client";
import axios from "axios";
import { PayPalButtonsComponentProps } from "@paypal/react-paypal-js";

interface OrderData {
  id: string;
  details?: Array<{
    issue: string;
    description: string;
  }>;
  debug_id?: string;
}

const createOrder: PayPalButtonsComponentProps["createOrder"] = async () => {
  try {
    const response = await axios.post("api/paypal");
    const orderData: OrderData = await response.data;
    if (!orderData || !orderData.id) {
      const errorDetail = orderData?.details?.[0];
      const errorMessage = errorDetail
        ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
        : "Unexpected error occurred, please try again.";
      throw new Error(errorMessage);
    }
    return orderData.id;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { createOrder };
