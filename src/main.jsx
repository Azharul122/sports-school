import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Common from './Components/Common/Common';
import Instructor from './Components/Pages/Instructor/Instructor';
import Login from './Components/Pages/Login/Login';
import Classes from './Components/Pages/Classes/Classes';
import Register from './Components/Pages/Register/Register';
import AuthProvider from './Components/Providers/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Common></Common>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"instructors",
        element: <Instructor></Instructor>
      },
      {
        path:"classes",
        element:<Classes></Classes>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
