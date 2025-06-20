import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const location = useLocation()
    
    const { user, loading} = use(AuthContext)
    
    if (loading) {
    
        return (
            
            <span className="loading loading-bars loading-xl"></span>
        )
}

    if (user && user.email) {
        return (
            children
        )
    }

    else {
                return <Navigate to="/login" state={{ from:location }} replace ></Navigate>

    }
};

export default PrivateRoute;