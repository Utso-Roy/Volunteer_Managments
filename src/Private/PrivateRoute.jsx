import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading/Loading';

const PrivateRoute = ({ children }) => {

    const location = useLocation()
    
    const { user, loading} = use(AuthContext)
    
    if (loading) {
    
        return (
            
          <Loading></Loading>
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