import axios from "axios";

const CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const SECRET = process.env.PAYPAL_CLIENT_SECRET;

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

export { getAccessToken };
