import React, { useEffect, useState } from 'react';




const PopularClasses = () => {
    const [classes,setClasses]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/classes/")
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 container mx-auto">
                    {
                        classes.map(clas => (
                            <div className="card  bg-slate-500 shadow-xl text-white rounded">
                            <figure className="px-10 pt-10">
                              <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                              <h2 className="card-title">{clas.className}</h2>
                              <div className="flex">
                              <p className='font-bold'>Instructor: </p>
                              <p>{clas.instructorName}</p>
                              </div>
                              <div className="flex justify-between w-full">
                                <p>Avliale seats: {clas.availableSeats}</p>
                                <p>${clas.price}</p>
                              </div>
                              <div className="card-actions">
                                <button className="py-2 px-3 bg-slate-700 rounded">Buy Now</button>
                              </div>
                            </div>
                          </div>
                        ))
                    }
            </div>
        </div>
    );
};

export default PopularClasses;