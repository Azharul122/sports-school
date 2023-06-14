
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';

const EnrolledClasses = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [classes, setClasses] = useState([]);
    // const [filterClasses,setFilterClasses]=useState([])
    const {user}=useContext(AuthContext)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/enrolled/${user.email}`);
          setClasses(response.data);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData()
    },[])
    if (isLoading) {
        return <faSpinner></faSpinner>
      }

    return (
        <div className="w-full px-2">
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
                 classes.sort((a, b) => b.date-a.date).map((sclass, index) => (
                  <tr key={sclass._id} className="text-center">
                    <td>{index + 1}</td>
                    <td>{sclass.transactionId}</td>
                    <td>$ {sclass.price}</td>
                    {/* avilableSheets,name,price,image,iname,iemail,feadBack:"",status:"pending" */}
                    <td>{sclass.date}</td>
              
                    <td>{sclass.quantity}</td>
                    <td>{sclass.status}</td>
  
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