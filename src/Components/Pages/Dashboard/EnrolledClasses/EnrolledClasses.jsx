
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';
import SectionTitle from '../../../Title/SectionTitle';

const EnrolledClasses = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [classes, setClasses] = useState([]);
    // const [filterClasses,setFilterClasses]=useState([])
    const {user}=useContext(AuthContext)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://as-12.vercel.app/enrolled/${user.email}`);
          setClasses(response.data);
          setIsLoading(false);
        } catch (error) {
        
        }
      };
      fetchData()
    },[])
    if (isLoading) {
        return <faSpinner></faSpinner>
      }

    return (
        <div className="w-full px-2">
          <SectionTitle heading={"Enrolled Classes"}></SectionTitle>
        <section>
          <div className="flex text-right  items-center pb-6 text-white">
            <div className="flex gap-2">
              <p>
                <b>Emrolled Classes: </b>
                {classes.length}
              </p>
            </div>
            
          </div>
        </section>
  
        <div className="overflow-x-auto">
          <table className="table overflow-x-auto table-xs w-full">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th className="text-white font-bold">SN.</th>
                <th className="text-white font-bold">Classes Name.</th>
                
                <th className="text-white font-bold">transactionId</th>
                <th className="text-white font-bold">Price</th>
                <th className="text-white font-bold">date</th>
                <th className="text-white font-bold">quantity</th>
                <th className="text-white font-bold">Status</th>
          
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {user &&
                 classes.sort((a, b) =>new Date(b.date)-new Date(a.date)).map((sclass, index) => (
                  <tr key={sclass._id} className="text-center ">
                    <td className='border py-2'>{index + 1}</td>
                    <td className='border py-2'>
                      {
                        sclass.itemNames.map(clas=>(<p className=''>{clas}</p>))
                      }
                    </td>
                    <td className='border py-2'>{sclass.transactionId}</td>
                    <td className='border py-2'>$ {sclass.price}</td>
                    {/* avilableSheets,name,price,image,iname,iemail,feadBack:"",status:"pending" */}
                    <td className='border py-2'>{sclass.date}</td>
              
                    <td className='border py-2'>{sclass.quantity}</td>
                    <td className='border py-2'> {sclass.status}</td>
  
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

export default EnrolledClasses;