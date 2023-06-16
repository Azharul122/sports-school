import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useClasses from "../../Hooks/useClass/useClasses";
import useCart from "../../Hooks/useCart/useCart";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  const [role,setRole]=useState("")
  useEffect(()=>{
      fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
          setRole(data.role)
       
     
      })
  },[user?.email])
// const [classesData]=useClasses()
// console.log(classesData)
// const [cartData]=useCart()

// console.log(cartData)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .then((error) => {
        console.log(error);
      });
  };

  const whiteMode=()=>{
    document.getElementById("home").style.backgroundColor="black"
    document.getElementById("whiteMode").classList.add("hidden")
    document.getElementById("derkMode").classList.remove("hidden")
  }
  const derkMode=()=>{
    document.getElementById("home").style.backgroundColor="white"
    document.getElementById("whiteMode").classList.remove("hidden")
    document.getElementById("derkMode").classList.add("hidden")
  }
  return (
    <>
      <div className=" bg-slate-500">
        <div className="navbar container text-white mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className=" lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-4"
              >
                <Link to={"/"}>Home</Link>
                <Link to={"/instructors"}>Instructors</Link>
                <Link to={"/classes"}>Classes</Link>
                {
                  user && <Link to={"/dashboard"}>Dashboard</Link>
                }
              </ul>
            </div>
            <a className=" normal-case text-xl">Sports Shcool</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5">
              <Link to={"/"}>Home</Link>
              <Link to={"/instructors"}>Instructors</Link>
              <Link to={"/classes"}>Classes</Link>
              {
                role && user &&  role=="admin"?<Link to={"dashboard/admin-home"}>Dashboard</Link>:user && role=="instructor"?<Link to={"dashboard/instructor-home"}>Dashboard</Link>:user && <Link to={"dashboard/student-home"}>Dashboard</Link>
                  // role && <Link to={role=="admin"?"/dashboard/admin-home":role="instructor" ?"/instructor-home":"/student-hom"}>Dashboard</Link>
                }
                <FaMoon onClick={ whiteMode} id="whiteMode" className="text-lg cursor-pointer" ></FaMoon>
                <FaRegMoon onClick={derkMode} id="derkMode" className="text-lg hidden cursor-pointer" ></FaRegMoon>
            </ul>
          </div>
          <div className="navbar-end">
            {
             user?(
              <div className="flex gap-2 items-center">
              <img src={user?.photoURL} alt=""  className="w-[32px] h-[32px] rounded-full"/>
              <Link to={"/login"} className="" onClick={handleLogOut}>
                Log Out
              </Link>
            </div>
             ):(
              <Link to={"/login"} className="py-2 px-3 bg-[rgba(0,0,0,0.2)]">
              Login
            </Link>
             )
            }
          
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
