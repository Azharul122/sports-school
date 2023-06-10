import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaTrash } from 'react-icons/fa';

const ManageUsers = () => {
    const {user}=useContext(AuthContext)
    const {data:users=[],refetch}=useQuery(['users'],async()=>{
    
    const result=await fetch("http://localhost:5000/users/")
    return result.json()
    })
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
        <th className='text-white font-bold'>image</th>
        <th className='text-white font-bold'>Avilable Sheets</th>
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
    <td><button className='bg-stone-500 text-white p-1'>Instructor</button> <button className='text-white bg-slate-500 p-1'>Admin</button></td>
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