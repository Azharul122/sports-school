import React, { useContext, useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { AuthContext } from "../../../Providers/AuthProvider";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
const Payemnt = () => {
  const { user } = useContext(AuthContext);
  const [cartData,setCartData]=useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/selected-classes/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCartData(data));
  }, []);

  const price=cartData.reduce((sum,item)=>parseInt(item.price)+sum,0)
  const totalPrice=parseFloat(price.toFixed(2))
  const cartLength=cartData.length
  return (
    <div className="w-full ">
          <section>
                <div className="flex text-right  justify-center items-center  text-white">
                    <div className="flex gap-2 ">
                    <p className="bg-slate-500 text-white btn"><b>Selected classes: </b>{cartLength}</p>
                    <p className="bg-slate-500 btn"><b>Total price: </b>$ {totalPrice}</p>
                    </div>
                 
                </div>
                </section>
      <div className="container mx-auto  px-10">
      
        <Elements stripe={stripePromise}>
        <CheckoutForm totalPrice={totalPrice} cartLength={cartLength} cartData={cartData}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payemnt;
