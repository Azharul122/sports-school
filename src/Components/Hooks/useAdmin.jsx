import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useAdmin = () => {
    const {user,loading}=useContext(AuthContext)

    return (
        <div>
            
        </div>
    );
};

export default useAdmin;