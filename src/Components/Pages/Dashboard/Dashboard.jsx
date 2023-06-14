import React, { useContext, useState } from "react";
import { FaBook, FaCartPlus, FaHome, FaPlus, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Spinner from "../../Spinner/Spinner";


const Dashboard = () => {
  const [isAdmin,setIsAdmin]=useState(false)
  const [isInstructor,setIsInstructor]=useState(false)
  const [dashboardLoading,setDashboardLoading]=useState(true)

  const {user,loading}=useContext(AuthContext)
  fetch("http://localhost:5000/users")
.then((res) => res.json())
.then((data) => {
  setDashboardLoading(false)
  if(dashboardLoading && !user?.role){

    return <Spinner></Spinner>
  }
  const filtiredUser = data.filter((d) => user?.email == d.email);
filtiredUser.map(fu=>{
  if(fu.role=="admin"){
    setIsAdmin(true)
    setIsInstructor(false)
  
  }
 else if(fu.role=="instructor"){
    setIsAdmin(false)
    setIsInstructor(true)
   
  }
  else{
    setIsAdmin(false)
    setIsInstructor(false)
   
  }
  
})
})
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {/* todo: to make active link */}
            {isAdmin ? (
              <>
                 <li>
                  <Link
                    to={"admin-home"}
                    className="bg-slate-600 mb-2 text-white"
                  >
                    <FaHome></FaHome>
                    Admin  Home{" "}
                    
                  </Link>
                </li>
                <li>
                  <Link
                    to={"manage-classes"}
                    className="bg-slate-600 mb-2 text-white"
                  >
                    <FaPlus></FaPlus>
                    Manage Classes
                  </Link>
                </li>
                <li>
                  <Link
                    to={"manage-users"}
                    className="bg-slate-600 mb-2 text-white"
                  >
                    <FaUsers></FaUsers>
                    Manage Users:
                  </Link>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <Link
                    to={"instructor-home"}
                    className="bg-slate-600 mb-2 text-white"
                  >
                    <FaHome></FaHome>
                    Instructor  Home{" "}
                    
                  </Link>
                </li>
                <li>
                  <Link
                    to={"add-class"}
                    className="bg-slate-600 mb-2 text-white"
                  >
                    <FaPlus></FaPlus>
                    Add a Class
                  </Link>
                </li>
                <li>
                  <Link
                    to={"my-classes"}
                    className="bg-slate-600 mb-2 text-white"
                  >
                    <FaBook></FaBook>
                    My Classes
                  </Link>
                </li>
              </>
              // ................................Instructor end ................................................
            ) : (
              <>
                <li>
                  <Link
                    to={"selected-classes"}
                    className="bg-slate-600 mb-2 text-white"
                  >
                    Selected Classes{" "}
                    <div className="relative bg-black w-[15px] h-[15px]">
                      <FaCartPlus className="w-full h-full"></FaCartPlus>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"enrolled-classes"}
                    className="bg-slate-600 mb-2 text-white"
                  >
                    Enrolled Classes
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
