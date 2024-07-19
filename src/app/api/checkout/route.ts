import { NextResponse, NextRequest } from "next/server";
import paypal from "@paypal/checkout-server-sdk";

const clientId = process.env.PAYPAL_CLIENT_ID!;
const clientSecreet = process.env.PAYPAL_CLIENT_SECRET!;

const enviroment = new paypal.core.SandboxEnvironment(clientId, clientSecreet);
const client = new paypal.core.PayPalHttpClient(enviroment);

export async function POST(request: NextRequest) {
  const { value } = await request.json();
  const requestOrder = new paypal.orders.OrdersCreateRequest();
  requestOrder.requestBody({
    intent: "CAPTURE",

    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: value,
        },
      },
    ],
  });

  const response = await client.execute(requestOrder);
  console.log(response);

  return NextResponse.json({
    id: response.result.id,
  });
}
