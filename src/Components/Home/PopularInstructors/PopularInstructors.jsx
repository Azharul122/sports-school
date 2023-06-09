import React, { useEffect, useState } from 'react';





const PopularInstructors = () => {
    const [instructors,setInstructors]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/instructors/")
        .then(res=>res.json())
        .then(data=>setInstructors(data))
    },[])
    return (
        <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 container mx-auto">
                    {
                        instructors.map(instructor => (
                            <div className="card  bg-slate-500 shadow-xl text-white rounded">
                            <figure className="px-10 pt-10">
                              <img src={instructor.image} alt="Shoes" className="rounded-xl" />
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

export default PopularInstructors;