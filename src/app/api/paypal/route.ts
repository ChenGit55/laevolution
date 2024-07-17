import { NextResponse, NextRequest } from "next/server";
import axios from "axios";
import { getAccessToken } from "@/services/payPalToken.service";

export async function POST() {
  try {
    const accessToken = await getAccessToken();

    const totalPrice = "10.00";
    const response = await axios.post(
      "https://api-m.sandbox.paypal.com/v2/checkout/orders",
      {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: totalPrice,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.data;
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
}
