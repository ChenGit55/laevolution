import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";

export const PayPal = ({ totalPrice }: { totalPrice: string }) => {
  const requestData = {
    value: totalPrice,
  };
  return (
    <PayPalScriptProvider
      options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID! }}
    >
      <PayPalButtons
        createOrder={async () => {
          const response = await axios.post("api/checkout", requestData);
          const order = response.data;
          console.log(order);
          return order.id;
        }}
      />
    </PayPalScriptProvider>
  );
};
