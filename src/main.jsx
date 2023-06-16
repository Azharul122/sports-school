import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Common from "./Components/Common/Common";
import Instructor from "./Components/Pages/Instructor/Instructor";
import Login from "./Components/Pages/Login/Login";
import Classes from "./Components/Pages/Classes/Classes";
import Register from "./Components/Pages/Register/Register";
import AuthProvider from "./Components/Providers/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import SelectedClasses from "./Components/Pages/Dashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "./Components/Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import InstructorHome from "./Components/Pages/Instructor/InstructorHome/InstructorHome";
import AddClass from "./Components/Pages/Instructor/AddClass/AddClass";
import MyClass from "./Components/Pages/Instructor/MyClass/MyClass";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import AdminHome from "./Components/Pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageUsers from "./Components/Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageClasses from "./Components/Pages/Dashboard/Admin/ManageClasses/ManageClasses";

  import UpdateClass from "./Components/Pages/Instructor/MyClass/UpdateClass";
import InstructorRoute from "./Components/Routes/InstructorRoute/InstructorRoute";
import Payemnt from "./Components/Pages/Dashboard/Payemnt/Payemnt";
import AdminRoute from "./Components/Routes/AdninRoute/AdminRoute";
import StudentHome from "./Components/Pages/Dashboard/StudentHome/StudentHome";
import StudentRoute from "./Components/Routes/StudentRoute/StudentRoute";
import Error from "./Components/Pages/Error/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Common></Common>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructor></Instructor>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "student-home",
            element: <StudentRoute><StudentHome></StudentHome></StudentRoute>,
          },
          {
            path: "selected-classes",
            element:<StudentRoute> <SelectedClasses></SelectedClasses></StudentRoute>,
          },
          {
            path: "selected-classes/payment",
            element: <StudentRoute><Payemnt></Payemnt></StudentRoute>,
          },
          {
            path: "enrolled-classes",
            element: <StudentRoute><EnrolledClasses></EnrolledClasses></StudentRoute>,
          },
                // ........................................... Instrucror ..............................................................................
          {
            path: "instructor-home",
            element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>,
          },
          {
            path: "add-class",
            element: <InstructorRoute><AddClass></AddClass></InstructorRoute>,
          },
          {
            path: "my-classes",
            element: <InstructorRoute><MyClass></MyClass></InstructorRoute>,
          },
          {
            path:"my-classes/update-class/:id",
            element:<InstructorRoute><UpdateClass></UpdateClass></InstructorRoute>,
            loader: ({params})=>fetch(`https://as-12.vercel.app/clas/${params.id}`)
          },
          // ............................................. Admin...............................................................
          {
            path:"admin-home",
            element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
          },
          {
            path:"manage-classes",
            element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
          },
          {
            path:"manage-users",
            element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
          } 
       
       
        ],
      },
 
    ],

  },
  {
    path:"*",
    element:<Error></Error>
  }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
