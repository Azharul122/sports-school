import React, { useContext, useState } from 'react';
import { Navigate, Route,useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';


const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
    const navigate=useNavigate()
  const { user } = useContext(AuthContext);
  fetch(`https://as-12.vercel.app/users/${user?.email}`)
  .then((res) => res.json())
  .then((data) =>{
    const isAuthorized = allowedRoles.includes(data.role);
    return isAuthorized
  })
  // Check if the user role is allowed to access the route
  

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized ? <Component {...props} /> : (<Navigate to="/" />)
      }
    />
  );
};

export default ProtectedRoute;
