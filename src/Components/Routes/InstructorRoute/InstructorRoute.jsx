import React, { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Spinner from "../../Spinner/Spinner";

// const InstructorRoute = ({ children }) => {
//   const { user,loading } = useContext(AuthContext);

//   const nevigate = useNavigate();
//   if(loading)
//   {
//     return <Spinner></Spinner>
//   }
//   if (user) {
//     fetch(`https://as-12.vercel.app/users/${user.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//       console.log(data.role)
   
//           if (data.role && data.role == "admin") {
//             return children;
//           } 
//           else {
//             Swal.fire({
//               position: "center",
//               icon: "error",
//               title: `${data.role} Can not access this page`,
//               showConfirmButton: false,
//               timer: 1500,
//               confirmButtonText: 'ok',
//             });
//             return <Navigate to={"/login"}></Navigate>
//           }
   
//         // console.log(filtiredUser);
//       });
//   }
// //   return <div></div>;
// };



// import React from 'react';

const InstructorRoute = ({children}) => {
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
   if(role=="instructor"){
    return children
   }
   return <Navigate to={"/"}></Navigate>
};

export default InstructorRoute;
