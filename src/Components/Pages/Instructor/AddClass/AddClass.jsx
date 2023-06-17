import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import SectionTitle from "../../../Title/SectionTitle"
import Swal from "sweetalert2";

const AddClass = () => {
    const {user}=useContext(AuthContext)

    const addClassData = (event) => {
        event.preventDefault();
        const form=event.target
        const avilableSheets=form.avilableSheets.value
        const name=form.name.value
        const price=form.price.value
        const image=form.image.value
        const iname=form.instructorName.value
        const iemail=form.instructorEmail.value
        const result={avilableSheets,name,price,image,iname,iemail,feadBack:"",status:"pending",NOS:20}
       
        fetch(`https://as-12.vercel.app/classes`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(result),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.insertedId) {
               
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Class Added.",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });//then data
    }

  return (
    <div>
              
                <div className="relative flex flex-col justify-center overflow-hidden ">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
                <SectionTitle heading={"Add New Class"}></SectionTitle>
                    <form className="space-y-4" onSubmit={addClassData}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div>
                                <label className="label">
                                    <span className="text-black abel-text">Name</span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className="w-full input input-bordered text-white"
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-black abel-text">Image</span>
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="Image Link"
                                    className="w-full input input-bordered text-white"
                                />
                          
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-black abel-text">Avilable Sheets</span>
                                </label>
                                <input
                                    type="number"
                                   name="avilableSheets"
                                    placeholder="Avilable Sheets"
                                    className="w-full input input-bordered text-white"
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-black abel-text">Price</span>
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Price"
                                    className="w-full input input-bordered text-white"
                                />
                               
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-black abel-text">Instructor Name</span>
                                </label>
                                <input value={user?user.displayName:""} disabled type="email"  className="w-full input input-bordered text-white" name="instructorName" placeholder="Inatructor Name"/>
                               
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-black abel-text">Instructor Email</span>
                                </label>
                                <input id="instructorEmail" value={user?user.email:""} disabled type="text"  className="w-full input input-bordered text-white" name="instructorEmail"  placeholder="Instructor Email"/>
                               
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

export default AddClass;
