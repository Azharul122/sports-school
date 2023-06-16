import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "./CheckoutForm.css";
import { AuthContext } from "../../../Providers/AuthProvider";
// import useClasses from '../../../Hooks/useClass/useClasses';
import Swal from "sweetalert2";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const CheckoutForm = ({ totalPrice, cartLength, cartData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardeorror] = useState("");
  const [clientSecret, setclientSecret] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate=useNavigate
  // const [classesData]=useClasses()
  const [transactionId, setTransactionId] = useState("");
  useEffect(() => {
    if (totalPrice > 0) {
      const price = { price: totalPrice };
      fetch(`https://as-12.vercel.app/craete-payment-intent`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(price),
      })
        .then((res) => res.json())
        .then((data) => setclientSecret(data.clientSecret));
    }
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardeorror(error.message);
      console.log("[error]", error);
    } else {
      setCardeorror("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    console.log(paymentIntent);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price: totalPrice,
        date: new Date(),
        quantity: cartLength,
        cartItems: cartData.map((item) => item._id),
        menuItems: cartData.map((item) => item.itemId),
        // avilableSheets:classesData.map(),
        status: "service pending now",
        itemNames: cartData.map((item) => item.name),
      };


          // fetch(`https://as-12.vercel.app/payments`, {
          //   method: "POST",
          //   headers: {
          //     "content-type": "application/json",
          //   },
          //   body: JSON.stringify(payment),
          // })
          axios.post('https://as-12.vercel.app/payments', payment)
          .then(res => {
              console.log(res.data);
              if (res.data.result.insertedId) {

              
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Paayment success',
                  showConfirmButton: false,
                  timer: 2500
                })
                navigate("../enrolled-classes")
              }
          })
 

    }
  };

  return (
    <div className="w-full">
      <div className="w-full py-4 text-center">
        <p>{cartLength}</p>
      </div>
      <form onSubmit={handleSubmit} className="">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
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
        {cardError && <p className="text-red-800">{cardError}</p>}
        <button
          type="submit"
          className="px-2 py-1 bg-green-500 mt-5 text-white font-bold rounded"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
