import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";

const ManageClasses = () => {
  const { user } = useContext(AuthContext);
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const result = await fetch("http://localhost:5000/classes/");
    return result.json();
  });

  return (
    <div className="w-full md:w-[90%] mx-auto">
      <section>
        <div className="flex text-right  justify-between items-center pt-6 text-white">
          <div className="flex gap-2">
            <p>
              <b>Total Classes: </b>
              {classes.length}
            </p>
          </div>
          <button className="px-2 py-1  bg-slate-500">process to pay</button>
        </div>
      </section>

      <div className="overflow-x-auto w-full">
        <table className="table table-xs  w-full">
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
                  
                  <button className="bg-stone-500 text-white p-1">
                      Pending
                    </button>{" "}
                    <button className="text-white bg-green-500 p-1">
                      Approve
                    </button> {" "}
                    <button className="text-white bg-red-500 p-1">
                      Deny
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
