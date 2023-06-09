import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import Spinner from "../Spinner/Spinner";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  let { user, loading } = useContext(AuthContext);
  // let [message,setMessage]=useState("")
  // const msg=toast("Please Loagin First to access this pages")
  if (user) {
    return children;
  }
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <ToastContainer></ToastContainer>

      <Navigate state={{ from: location }} to={"/login"} replace></Navigate>
    </div>
  );
};

export default PrivateRoute;
