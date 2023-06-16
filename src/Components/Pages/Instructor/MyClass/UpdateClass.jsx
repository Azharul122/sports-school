import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateClass = () => {
    const data=useLoaderData()
 const nevigate=useNavigate()

    const addClassData = (event) => {
        event.preventDefault();
        const form=event.target
        const avilableSheets=form.avilableSheets.value
        const name=form.name.value
        const price=form.price.value
        const image=form.image.value
        // const iname=form.instructorName.value
        // const iemail=form.instructorEmail.value
        const result={avilableSheets,name,price,image}
        console.log(result)

        fetch(`https://as-12.vercel.app/classUpadte/${data._id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(result),
                })
                  .then((res) => res.json())
                  .then((dat) => {
                   
                    // refetch();
                    // hideModal()
                    if (dat.modifiedCount>0) {
                        
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Class Updated`,
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      
                    }
                    nevigate("../my-classes/")
                  });
    }


    return (
<div>
                <div className="relative flex flex-col justify-center overflow-hidden ">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-gray-700">
                       Update
                    </h1>
                    <form className="space-y-4" onSubmit={addClassData}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div>
                                <label className="label">
                                    <span className="text-black abel-text">Name</span>
                                </label>
                                <input
                                defaultValue={data?.name}
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className="w-full input input-bordered"
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-black abel-text">Image</span>
                                </label>
                                <input
                                defaultValue={data?.image}
                                    type="text"
                                    name="image"
                                    placeholder="Email Address"
                                    className="w-full input input-bordered"
                                />
                          
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-black abel-text">Avilable Sheets</span>
                                </label>
                                <input
                                defaultValue={data?.avilableSheets}
                                    type="number"
                                   name="avilableSheets"
                                    placeholder="Avilable Sheets"
                                    className="w-full input input-bordered"
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-black abel-text">Price</span>
                                </label>
                                <input
                                defaultValue={data?.price}
                                    type="number"
                                    name="price"
                                    placeholder="Price"
                                    className="w-full input input-bordered"
                                />
                               
                            </div>
                         
                        </div>
                 
                
                        <div>
                            <input type="submit" className="btn btn-block" />
                            {/* <button className="btn btn-block" type='submit'>Sign Up</button> */}
                        </div>
                       
                    </form>
                  
                </div>
            </div>
    </div>
    );
};

export default UpdateClass;