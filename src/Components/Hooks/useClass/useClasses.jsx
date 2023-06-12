import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    error,
    data: classes = [],
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: () =>
      fetch("http://localhost:5000/classes")
        .then((res) => res.json())
        .then((data) => {
          return data;
        }),
  });

  return [classes, refetch];
};

export default useClasses;
