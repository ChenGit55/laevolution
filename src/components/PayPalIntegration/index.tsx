import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
interface PayPalButtonProps {
  amount: string;
}

export default class PayPal extends React.Component<PayPalButtonProps> {
  render() {
    const { amount } = this.props;
    return (
      <PayPalButton
        amount={amount}
        shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(
          details: { payer: { name: { given_name: string } } },
          data: { orderID: any }
        ) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderId: data.orderID,
            }),
          });
        }}
        options={{
          clientId:
            "AYu7iw47FfT3SFawEsQ6WRnMGlltw_-onIMvkeoiDUM45ugXTdm5UDo7FLAnxA96Z2GPtXuqTk3-zevD",
          intent: "authorize",
          currency: "USD",
        }}
      />
    );
  }
}
