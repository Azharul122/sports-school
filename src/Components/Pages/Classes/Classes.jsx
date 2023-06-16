import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

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

  const handleClasses = (event,clas) => {
    event.preventDefault()

    if(!user){
      return (
        Swal.fire({
          position: "center",
          icon: "error",
          title: "You Must Login First",
          showConfirmButton: false,
          timer: 3500,
        })
      )
    }

    const {_id,avilableSheets,image,name,iemail,iname,price}=clas
    const classItem={itemId: _id,image,avilableSheets,name,iemail,iname,price,email:user?.email}
    console.log(classItem)

      // console.log(avilableSheets)
      // if(avilableSheets==0){
      //   event.currentTarget.disabled = true;
        
      // }
      fetch("http://localhost:5000/selected-classes", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(classItem)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Course selected",
            showConfirmButton: false,
            timer: 2500,
          });
        }
        else{
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Try again",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      })


  };
  // const {className,image}=[classes]
  // console.log(className)
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 container mx-auto">
        { classes.filter(c=>c.status==="approved").map((clas) => (
          <div className={`card   shadow-xl text-white rounded ${clas.avilableSheets<1?"bg-red-500 opacity-70":"bg-slate-500"}`}>
            <figure className="px-10 pt-10">
              <img
                src={clas.image}
                alt="Shoes"
                className="rounded-xl h-[200px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{clas.name}</h2>
              <div className="flex gap-2">
                <p className="font-bold">Instructor:{" "}</p>
                <p> { clas.iname}</p>
              </div>
              <div className="flex justify-between w-full">
                <p>Avliale seats: {clas.avilableSheets<1 ? 0 :clas.avilableSheets}</p>
                <p>${clas.price}</p>
              </div>
              <p className='flex gap-1 items-center'><FaUsers></FaUsers> {clas.NOS}</p>

              <div className="card-actions">
                <button
                disabled={clas.avilableSheets<1}
                  onClick={(event)=>handleClasses(event,clas)}
                  className={`py-2 px-3 bg-slate-700 rounded ${clas.avilableSheets<1?"opacity-50":""}`}
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
