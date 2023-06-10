import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const { user } = useContext(AuthContext);
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const result = await fetch("http://localhost:5000/classes/");
    return result.json();
  });

  //make approve
const makeApprove=(id)=>{
  // fetch("") instructor
  fetch(`http://localhost:5000/classes/approve/${id}`,{
    method:"PATCH"

})
.then(res=>res.json())
.then(data=>{
    if(data.modifiedCount)
    {
        refetch();   
Swal.fire({
position: 'center',
icon: 'success',
title: `Class Approved`,
showConfirmButton: false,
timer: 1500
})
    }
})

}
// Make denie
const makeDenie=(id)=>{
  // fetch("") instructor
  fetch(`http://localhost:5000/classes/deny/${id}`,{
    method:"PATCH"

})
.then(res=>res.json())
.then(data=>{
    if(data.modifiedCount)
    {
        refetch();   
Swal.fire({
position: 'center',
icon: 'success',
title: `Class Denied`,
showConfirmButton: false,
timer: 1500
})
    }
})
}
  return (
    <div className="w-full md:w-[90%] mx-auto">
      <section>
        <div className="flex text-right  justify-between items-center pb-6 text-white">
          <div className="flex gap-2">
            <p>
              <b>Total Classes: </b>
              {classes.length}
            </p>
          </div>
          <button className="px-2 py-1  bg-slate-500">process to pay</button>
        </div>
      </section>

      <div className="overflow-x-auto">
        <table className="table overflow-x-auto table-xs w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th className="text-white font-bold">SN.</th>
              <th className="text-white font-bold">Name</th>

              <th className="text-white font-bold">I Name</th>
              <th className="text-white font-bold">I Email</th>
              <th className="text-white font-bold">image</th>
              <th className="text-white font-bold">Avilable Sheets</th>
              <th className="text-white font-bold">Price</th>
              <th className="text-white font-bold">Stutus</th>
              <th className="text-white font-bold">Feaddback</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {user &&
              classes.map((sclass, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{sclass.className}</td>
                  <td>{sclass.instructorName}</td>

                  <td>{sclass.instructorEmail}</td>
                  <td>
                    <img
                      src={sclass.image}
                      alt=""
                      className="h-[40px] w-[40px]"
                    />
                  </td>
                  <td>{sclass.availableSeats}</td>
                  <td>${sclass.price}</td>
                  <td>
                  
                  <button  className="bg-stone-500 text-white p-1">
                      Pending
                    </button>{" "}
                    <button disabled={sclass.status=="approved"} onClick={()=>makeApprove(sclass._id)} className={`text-white bg-green-500 p-1 ${sclass.status=="approved" ?"opacity-50":""}`}>
                      Approve
                    </button> {" "}
                    <button disabled={sclass.status=="denied"} onClick={()=>makeDenie(sclass._id)} className={`text-white bg-red-500 p-1 ${sclass.status=="denied" ?"opacity-50":""}`}>
                      Deny
                    </button>
         
                  </td>
                  <td>
                  <button className="text-white bg-red-500 p-1">
                      FeadBack
                    </button>
                  </td>
                </tr>
              ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
