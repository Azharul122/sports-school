import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    error,
    data: classesData = [],
    refetch,
  } = useQuery({
    queryKey: ["classesData"],
    queryFn: async() => {
      if (!user) {
        return [];
      }
      const res=await fetch("http://localhost:5000/classes")
      const data=await res.json()
      console.log(data)
      return data
    },
  });
  return [classesData, refetch];
};

export default useClasses;
