import React, { useContext, useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const SelectedClasses = () => {
    const {user}=useContext(AuthContext)
    const [selectedClasses,setSelectedClasses]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/selected-classes/")
        .then(res=>res.json())
        .then(data=>setSelectedClasses(data))
    },[])
    // console.log(user.email)
//    console.log(selectedClasses.filter(sc=>sc.email==user.email))


const userClasses= selectedClasses.filter(sc=>sc?.email==user?.email);
const handleDelete=(classes)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/selected-classes/${classes._id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Deleted',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      const remaining=selectedClasses.filter(sc=>sc._id!==classes._id)
                      setSelectedClasses(remaining)
                }
                else{
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Try again',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
      })
}
    return (
        <div className='w-full md:w-[90%] mx-auto'>
            <section>

            </section>

            <div className="overflow-x-auto w-full">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
      <th className='text-white font-bold'>SN.</th>
        <th className='text-white font-bold'>Name</th>
        <th className='text-white font-bold'>image</th>
        <th className='text-white font-bold'>Avilable Sheets</th>
        <th className='text-white font-bold'>price</th>
        <th className='text-white font-bold'>Action</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
   {
  user && userClasses.map((sclass,index)=>
    <tr>
    <td>{index+1}</td>
    <td>{sclass.className}</td>
    <td>{sclass.email}</td>
    <td>{sclass.availableSeats}</td>
    <td>{sclass.price}</td>
    <td><FaTrash onClick={()=>handleDelete(sclass)} className='text-red-500 font-bold text-sm cursor-pointer'></FaTrash></td>
  </tr>
    )

   }
      {/* row 2 */}

    </tbody>
  </table>
</div>
    <section>
                <div className="flex text-right  justify-between items-center pt-6 text-white">
                    <div className="flex gap-2">
                    <p><b>Selected classws: </b>{userClasses.length}</p>
                    <p><b>Total price: </b>${userClasses.reduce((sum,item)=>item.price+sum,0).toFixed(2)}</p>
                    </div>
                    <button className='px-2 py-1  bg-slate-500'>process to pay</button>
                </div>
                </section>
        </div>
    );
};

export default SelectedClasses;