/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import useAuth from "../../hook/useAuth";
import axios from "axios";

export default function CheckOut({ price, serviceName }) {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [transaction, setTransaction] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  // const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (price > 0) {
      axios
        .post(
          `${import.meta.env.VITE_API_KEY_LOCALHOST}/create-payment-intent`,
          { price }
        )
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error: cardError } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        email: user?.email || "anonymous",
        name: user?.displayName || "anonymous",
      },
    });

    if (cardError) {
      setError(cardError.message);
      return;
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      setTransaction(paymentIntent.id);

      const paymentInfo = {
        email: user?.email,
        price,
        serviceName,
        transactionId: paymentIntent.id,
        date: new Date(),
      };

      // Save payment to the database
      axios.post("/payment", paymentInfo).then((res) => {
        // You can handle toast or success state here
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-6 border rounded-lg shadow bg-white">
    <div className="mb-4">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "18px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
    </div>

    <button
      type="submit"
      disabled={!stripe || !clientSecret}
      className="btn btn-warning w-full mt-4"
    >
      Pay ${price}
    </button>

    {error && <p className="text-red-500 mt-2">{error}</p>}
    {transaction && (
      <p className="text-green-500 mt-2">
        Payment Successful! Transaction ID: {transaction}
      </p>
    )}
  </form>
  );
}
