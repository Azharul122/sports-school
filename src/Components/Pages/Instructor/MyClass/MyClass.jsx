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
// const [id,setId]=useState(null)
//   const editeOpen = (sclass) => {
//     document.getElementById("authentication-modal").classList.remove("hidden");
//     document.getElementById("name").defaultValue = sclass.name;
//     document.getElementById("avilableSheets").defaultValue =
//       sclass.avilableSheets;
//     document.getElementById("image").defaultValue = sclass.image;
//     document.getElementById("price").defaultValue = sclass.price;
//    //setId(sclass.id)
//   };
//   const hideModal = () => {
//     document.getElementById("authentication-modal").classList.add("hidden");
//   };
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
    <div className="w-full md:w-[90%] mx-auto">
      <section>
        <div className="flex text-right  justify-between items-center pb-6 text-white">
          <div className="flex gap-2">
            <p>
              <b>Total Classes: </b>
              {filterMtClasses.length}
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
              <th className="text-white font-bold">Class Name</th>
              <th className="text-white font-bold">I Name</th>
              <th className="text-white font-bold">I Email</th>
              <th className="text-white font-bold">image</th>
              <th className="text-white font-bold">Avilable Sheets</th>
              <th className="text-white font-bold">Price</th>
              <th className="text-white font-bold">Stutus</th>

              <th className="text-white font-bold">Enrolled</th>
              <th className="text-white font-bold">Action</th>
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
                  <td>
                    {sclass.feadBack != "" && (
                      <button
                        className="text-white bg-red-500 p-1"
                        onClick={() => sentFeaddback(sclass._id)}
                      >
                        FeadBack
                      </button>
                    )}
                 <Link to={`update-class/${sclass._id}`}>   <FaEdit
                    //   onClick={() => editeOpen(sclass)}
                      data-modal-target="authentication-modal"
                      data-modal-toggle="authentication-modal"
                      className="text-green-500 text-xl cursor-pointer"
                    ></FaEdit></Link>
                    {/* <div className="flex justify-center">
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
                              <h3 className="mb-4 text-3xl font-medium text-gray-900 dark:text-white">
                                Update Class
                              </h3>
                              <form
                                className="space-y-6"
                                action="#"
                                onSubmit={(e) => updateClass(e, sclass)}
                              >
                                <div>
                                  <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Class Name
                                  </label>
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="name@company.com"
                                    required
                                  ></input>
                                </div>
                                <div>
                                  <label
                                    for="image"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Class Image
                                  </label>
                                  <input
                                    type="text"
                                    name="image"
                                    id="image"
                                    placeholder="Image"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                  ></input>
                                </div>
                                <div>
                                  <label
                                    for="avilableSheets"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Avilable Sheetsd
                                  </label>
                                  <input
                                    type="text"
                                    name="avilableSheets"
                                    id="avilableSheets"
                                    placeholder="Avilable Sheets"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                  ></input>
                                </div>
                                <div>
                                  <label
                                    for="price"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Price
                                  </label>
                                  <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    placeholder="Price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                  ></input>
                                </div>

                                <button
                                  type="submit"
                                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                  Update
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
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
