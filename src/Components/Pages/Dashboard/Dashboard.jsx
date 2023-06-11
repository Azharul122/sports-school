import React from "react";
import { FaBook, FaCartPlus, FaHome, FaPlus, FaUsers } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = false;
  const isInstructor = true;

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
