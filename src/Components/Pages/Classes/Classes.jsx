import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Classes = () => {

  const location=useLocation()
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes/")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  const handleClasses = (event,availableSeats) => {
    if (!user) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "You must login first",
        showConfirmButton: false,
        timer: 2500,
      });
      navigate("/login");
    //  ( <Navigate state={{ from: location }} to={"/login"} replace></Navigate>)
    
    }
    else{
      console.log(availableSeats)
      if(availableSeats==0){
        event.currentTarget.disabled = true;
        
      }
    }
  };
  // const {className,image}=[classes]
  // console.log(className)
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 container mx-auto">
        {classes.map((clas) => (
          <div className={`card  bg-slate-500 shadow-xl text-white rounded ${clas.availableSeats===0?"bg-red-600":""}`}>
            <figure className="px-10 pt-10">
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{clas.className}</h2>
              <div className="flex">
                <p className="font-bold">Instructor: </p>
                <p>{clas.instructorName}</p>
              </div>
              <div className="flex justify-between w-full">
                <p>Avliale seats: {clas.availableSeats}</p>
                <p>${clas.price}</p>
              </div>
              <div className="card-actions">
                <button
                disabled={clas.availableSeats===0}
                  onClick={()=>handleClasses(event,clas.availableSeats)}
                  className={`py-2 px-3 bg-slate-700 rounded ${clas.availableSeats===0?"bg-[rgba(0,0,0,0.3)]":""}`}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
