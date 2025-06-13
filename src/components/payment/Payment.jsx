import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function Payment() {
  const location = useLocation();
  const { price, serviceName } = location.state || {};

  return (
    <div className="flex flex-col gap-6 items-center text-center">
      <h1 className="text-4xl font-bold text-primary">Car Servicing Center</h1>
      <h2 className="text-xl font-semibold">
        Payment for <span className="text-green-600">{serviceName}</span>
      </h2>
      <p className="text-2xl font-medium text-yellow-600">
        Total Amount: ${price}
      </p>

      {price ? (
        <Elements stripe={stripePromise}>
          <CheckOut price={price} serviceName={serviceName} />
        </Elements>
      ) : (
        <p className="text-red-500">No price found. Cannot process payment.</p>
      )}
    </div>
  );
}
