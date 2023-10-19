import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useAuth();
    const location  = useLocation();

    if(loading) {
        return <>
        <div className="flex justify-center items-center max-w-7xl mx-auto h-screen">
       <span className="loading loading-spinner loading-lg"></span>
      </div>
      </>
    }
    if(!user?.email){
        return <Navigate state={location.pathname} to ="/login"></Navigate>
    }


    return children;


};

export default PrivateRoute;