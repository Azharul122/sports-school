import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const {user}=useContext(AuthContext)
    const {data:users=[],refetch}=useQuery(['users'],async()=>{
    
    const result=await fetch("https://as-12.vercel.app/users/")
    return result.json()
    })

    const makeInstructor=(id,name)=>{
        // fetch("") instructor
        fetch(`https://as-12.vercel.app/instructor/users/${id}`,{
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
    title: `${name} instructor now`,
    showConfirmButton: false,
    timer: 1500
  })
            }
        })
    }
    const makeAdmin=(id,name)=>{
        fetch(`https://as-12.vercel.app/admin/users/${id}`,{
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
    title: `${name} admin now`,
    showConfirmButton: false,
    timer: 1500
  })
            }
        })
    }
    return (
        <div className='w-full md:w-[90%] mx-auto'>
                <section>
                <div className="flex text-right  justify-between items-center pt-6 text-white">
                    <div className="flex gap-2">
                    <p><b>Total Users: </b>{users.length}</p>
                    
                    </div>
                    <button className='px-2 py-1  bg-slate-500'>process to pay</button>
                </div>
                </section>

            <div className="overflow-x-auto w-full">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
      <th className='text-white font-bold'>SN.</th>
        <th className='text-white font-bold'>Name</th>
        <th className='text-white font-bold'>Email</th>
        <th className='text-white font-bold'>Image</th>
        <th className='text-white font-bold'>Role</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
   {
  user && users.map((sclass,index)=>
    <tr>
    <td>{index+1}</td>
    <td>{sclass.name}</td>
    <td>{sclass.email}</td>
    <td><img src={sclass.photoURL} alt=""  className='h-[40px] w-[40px]'/></td>
    <td><button disabled={sclass.role=="instructor"} onClick={()=>makeInstructor(sclass._id,sclass.name)} className={`bg-stone-500 text-white p-1 ${sclass.role=="instructor" ? "opacity-50":""}`}>Instructor</button> <button disabled={sclass.role=="admin"}  onClick={()=>makeAdmin(sclass._id,sclass.name)} className={`text-white bg-slate-500 p-1 ${sclass.role=="admin" ? "opacity-50":""}`}>Admin</button></td>
  </tr>
    )

   }
      {/* row 2 */}

    </tbody>
  </table>
</div>

        </div>
    );
};

export default ManageUsers;