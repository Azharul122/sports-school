import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Spinner from "../../Spinner/Spinner";




const StudentRoute = ({children}) => {
    const [instructorLoading,setInstructorLoading]=useState(true)

    
 
    const { user,loading } = useContext(AuthContext);
    const [role,setRole]=useState("")
    useEffect(()=>{
        fetch(`https://as-12.vercel.app/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
            setRole(data.role)
            setInstructorLoading(false)
       
        })
    },[user?.email])
   if(loading || instructorLoading){
        return <Spinner></Spinner>
   }
   console.log(role)
   if(role=="Student"){
    return children
   }
   return <Navigate to={"/"}></Navigate>
};

export default StudentRoute;
