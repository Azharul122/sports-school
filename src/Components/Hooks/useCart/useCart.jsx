import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const useCart = () => {
  
    const { user,loading } = useContext(AuthContext);

    const { refetch, data: cartData = [] ,isLoading:isCardDataLoading} = useQuery({
        queryKey: ['selected-classes/email',user?.email],
        enabled:!!user?.email,
        queryFn: async () => {
            // fetch(`https://as-12.vercel.app/selected-classes/email/${user?.email}`)
            // .then(res=>res.json())
            // .then(data=>
            //     {
              
            //         return data
            //     })
            if(!user){
                return []
            }
            const res=await fetch(`https://as-12.vercel.app/selected-classes/email/${user?.email}`)
            const data=await res.json()
            console.log(data)
            return data
        },
    })
    console.log(cartData)
return [cartData,refetch,isCardDataLoading]
};

export default useCart;