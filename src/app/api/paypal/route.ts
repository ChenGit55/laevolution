import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const SECRET = process.env.PAYPAL_CLIENT_SECRET;

// // Função para obter o token de autenticação do PayPal
const getAccessToken = async () => {
  const auth = Buffer.from(`${CLIENT_ID}:${SECRET}`).toString("base64");
  const { data } = await axios.post(
    "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    "grant_type=client_credentials",
    {
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return data.access_token;
};

export async function POST() {
  try {
    const accessToken = await getAccessToken();
    const response = await axios.post(
      "https://api-m.sandbox.paypal.com/v2/checkout/orders",
      {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD", // Troque para a moeda desejada
              value: "10.00", // Troque para o valor desejado
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
    console.log("ACCESS TOKEN", data);
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
}
