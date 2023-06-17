import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const useRole = () => {
  const { user, loading } = useContext(AuthContext);

  const {
    refetch,
    data: userRole={},
    isLoading: isCardDataLoading,
  } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      if (!user) {
        return [];
      }
      const res = await fetch(`https://as-12.vercel.app/users/${user?.email}`);
      const data = await res.json();
      console.log(data.role)
      return data.role;
    },
  });
  console.log(userRole)
  return {userRole,refetch}
};

export default useRole;
