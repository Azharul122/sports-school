import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Fade, Rotate } from 'react-awesome-reveal';
import { FaSpinner, FaUsers } from "react-icons/fa";




// https://as-12.vercel.app/classes/
const PopularClasses = () => {
    // const [classes,setClasses]=useState([]);
    // useEffect(()=>{
    //     fetch("https://as-12.vercel.app/classes/")
    //     .then(res=>res.json())
    //     .then(data=>setClasses(data))
    // },[])
    const [isLoading, setIsLoading] = useState(true);
    const [classes, setClasses] = useState([]);
    // const [filterClasses,setFilterClasses]=useState([])
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://as-12.vercel.app/classes/');
          setClasses(response.data);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  // const shorClasses=[...classes].sort((a, b) => b.NOS-a.NOS)
  // setFilterClasses(shorClasses)


    if (isLoading) {
      return <FaSpinner></FaSpinner>
    }
    
    return (
        <div>
         <Fade>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 container mx-auto">
                    {
                      classes.sort((a, b) => b.NOS-a.NOS).slice(0,6).map(clas => (
                        <Rotate key={clas._id}>
                          <div className="card  bg-slate-500 shadow-xl text-white rounded">
                        <figure className="px-10 pt-10">
                          <img src={clas.image} className='h-[200px] md:h[300px]'/>
                        </figure>
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">{clas.name}</h2>
                          <div className="flex gap-2">
                          <p className='font-bold'>Instructor: </p>
                          <p>{clas.iname}</p>
                          </div>
                      
                        <div className="flex justify-between w-full">
                            <p>Avliale seats: {clas.avilableSheets<1?0:clas.avilableSheets}</p>
                            <p>${clas.price}</p>
                          </div>
                          <p className='flex gap-1 items-center'><FaUsers></FaUsers> {clas.NOS}</p>
                        
                        
                          <div className="card-actions">
                            <button className="py-2 px-3 bg-slate-700 rounded">Enroll Now</button>
                          </div>
                        </div>
                      </div>
                        </Rotate>
                    ))
                    }
            </div>
         </Fade>
        </div>
    );
};

export default PopularClasses;