import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useSpecificClasses = () => {
    const { user } = useContext(AuthContext);
    const {
      isLoading:isClassLoading,
      error,
      data: SpClass = [],
      refetch,
    } = useQuery({
      queryKey: ["SpClass",'user?.email'],
      queryFn: () =>
        fetch(`http://localhost:5000/classes/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            return data;
          }),
    });
    return [SpClass,refetch,isClassLoading]
};

export default useSpecificClasses;