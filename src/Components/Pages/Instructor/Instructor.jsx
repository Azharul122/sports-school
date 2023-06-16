import React, { useEffect, useState } from 'react';


const Instructor = () => {
    const [instructors,setInstructors]=useState([]);
    useEffect(()=>{
        fetch("https://as-12.vercel.app/users")
        .then(res=>res.json())
        .then(data=>{
          const fInstructor=data.filter(fi=>fi.role=="instructor")
          setInstructors(fInstructor)
        })
    },[])

    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 container mx-auto">
                    {
                        instructors.map(instructor => (
                            <div className="card  bg-slate-500 shadow-xl text-white rounded " key={instructor._id}>
                            <figure className="px-10 pt-10">
                              <img src={instructor.photoURL} alt="Shoes" className="rounded-xl h-[200px] md:h[300px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                              <h2 className="card-title">{instructor.name}</h2>
                              <div className="flex">
                              <p className='font-bold'>Email: </p>
                              <p>{instructor.email}</p>
                              </div>
                              {/* <div className="flex justify-between w-full">
                                <p>Avliale seats: {clas.availableSeats}</p>
                                <p>${clas.price}</p>
                              </div> */}
                              <div className="card-actions">
                                <button className="py-2 px-3 bg-slate-700 rounded">See Classes</button>
                              </div>
                            </div>
                          </div>
                        ))
                    }
            </div>
        </div>
    );
};

export default Instructor;