
import Spinner from '../../Spinner/Spinner';
import { AuthContext } from '../../Providers/AuthProvider';
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

const AdminRoute = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [role,setRole]=useState("")
 
    const { user } = useContext(AuthContext);
    useEffect(()=>{
        fetch(`https://as-12.vercel.app/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
            setLoading(false)
            setRole(data.role)
        })
    },[user?.email])
   if(loading){
        return <Spinner></Spinner>
   }
   if(role=="admin"){
    return children
   }
   return <Navigate to={"/"}></Navigate>
};

export default AdminRoute;