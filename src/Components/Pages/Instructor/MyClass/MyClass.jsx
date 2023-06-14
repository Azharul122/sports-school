import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyClass = () => {

  const { user } = useContext(AuthContext);
  
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const result = await fetch("http://localhost:5000/classes/");
    return result.json();
  });
const [id,setId]=useState(null)
  const showFeaddback = (sclass) => {
    document.getElementById("authentication-modal").classList.remove("hidden");
    document.getElementById("feadbackCOntent").innerText=sclass.feadBack

  };
  const hideModal = () => {
    document.getElementById("authentication-modal").classList.add("hidden");
  };
//   const updateClass = (event, sclass) => {
//     event.preventDefault();
//     const name = event.target.name.value;
//     const image = event.target.image.value;
//     const avilableSheets = event.target.avilableSheets.value;
//     const price = event.target.price.value;
//     const classOBj = { name, image, avilableSheets, price };

//     fetch(`http://localhost:5000/classUpadte/${sclass._id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(classOBj),
//     })
//       .then((res) => res.json())
//       .then((data) => {
       
//         refetch();
//         hideModal()
//         if (data.modifiedCount) {
            
//           Swal.fire({
//             position: "center",
//             icon: "success",
//             title: `Class Updated`,
//             showConfirmButton: false,
//             timer: 1500,
//           });
         
//         }
//       });
     
//     //console.log(classOBj, sclass);
//   };

  // update
  // const updateclassName=(sclass)=>{
  //     const classCollection={name:sclass.name,image:sclass.image,avilableSheets:sclass.avilableSheets,price:sclass.price}
  //     fetch(`http://localhost:5000/classUpadte/${sclass._id}`,{
  //             method:"PUT",
  //             headers:{
  //                 'Content-Type': 'application/json'
  //             },
  //             body:JSON.stringify(classCollection)

  //         })
  //         .then(res=>res.json())
  //         .then(data=>{
  //             if(data.modifiedCount)
  //             {
  //                 refetch();
  // Swal.fire({
  //     position: 'center',
  //     icon: 'success',
  //     title: `Class Updated`,
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  //             }
  //         })
  //     }

  // end update

  const filterMtClasses = classes.filter(
    (cl) => user?.email === cl.iemail && cl.status == "pending"
  );
  //console.log(filterMtClasses);
  return (
    <div className="w-full px-2">
      <section>
        <div className="flex text-right  items-center pb-6 text-white">
          <div className="flex gap-2">
            <p>
              <b>Total Classes: </b>
              {filterMtClasses.length}
            </p>
          </div>
          
        </div>
      </section>

      <div className="overflow-x-auto">
        <table className="table overflow-x-auto table-xs w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th className="text-white font-bold">SN.</th>
              <th className="text-white font-bold">Class Name</th>
              <th className="text-white font-bold">I Name</th>
              <th className="text-white font-bold">I Email</th>
              <th className="text-white font-bold">image</th>
              <th className="text-white font-bold">Avilable Sheets</th>
              <th className="text-white font-bold">Price</th>
              <th className="text-white font-bold">Stutus</th>
              <th className="text-white font-bold">Enrolled</th>
              <th className="text-white font-bold"><abbr title="Number of Students">NOS</abbr></th>
              <th className="text-white font-bold">FeadBack</th>
              <th className="text-white font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {user &&
              filterMtClasses.map((sclass, index) => (
                <tr key={sclass._id} className="text-center">
                  <td>{index + 1}</td>
                  <td>{sclass.name}</td>
                  <td>{sclass.iname}</td>
                  {/* avilableSheets,name,price,image,iname,iemail,feadBack:"",status:"pending" */}
                  <td>{sclass.iemail}</td>
                  <td>
                    <img
                      src={sclass.image}
                      alt=""
                      className="h-[40px] w-[40px] mx-auto"
                    />
                  </td>
                  <td>{sclass.avilableSheets}</td>
                  <td>${sclass.price}</td>
                  <td>{sclass.status}</td>

                  <td></td>
                  <td>{sclass.NOS}</td>
                  <td>
                    {sclass.feadBack != "" && (
                      <button
                        className="text-white bg-red-500 p-1"
                        onClick={() => showFeaddback(sclass)}
                      >
                        FeadBack
                      </button>
                    )}
           
                    <div className="flex justify-center">
                      <div
                        id="authentication-modal"
                        tabindex="-1"
                        aria-hidden="true"
                        className="fixed  z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                      >
                        <div className="relative w-full max-w-md max-h-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
                            <button
                              onClick={hideModal}
                              type="button"
                              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                              data-modal-hide="authentication-modal"
                            >
                              <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span className="sr-only">Close modal</span>
                            </button>
                            <div className="px-6 py-6 lg:px-8">
                              <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">
                                Admin FeadBack
                              </h3>
                              <form
                                className="space-y-6"
                                action="#"
                                
                              >
                                <div className="w-full text-white text-lg border py-3 px-1" id="feadbackCOntent">

                                </div>
                           
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                  <Link to={`update-class/${sclass._id}`}>   <FaEdit
                      className="text-green-500 text-xl cursor-pointer mx-auto"
                    ></FaEdit></Link>
                  </td>
                </tr>
              ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>

      {/* // modal  */}
    </div>
  );
};

export default MyClass;
