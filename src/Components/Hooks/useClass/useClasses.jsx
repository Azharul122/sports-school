import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { FaSpinner } from "react-icons/fa";

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
      if (!user || isLoading) {
      <FaSpinner></FaSpinner>
      }
      const res=await fetch("https://as-12.vercel.app/classes")
      const data=await res.json()
     
      return data
    },
  });
  return [classesData, refetch];
};

export default useClasses;
