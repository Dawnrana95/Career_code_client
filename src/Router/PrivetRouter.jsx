import React, { use } from 'react';
import { Autchontex } from '../Contex/AuthContex';
import { Navigate, useLocation } from 'react-router';

const PrivetRouter = ({children}) => {

    const {user , loding} = use(Autchontex)
    
    const location =useLocation()
    // console.log(location.pathname);
    if(loding){
        return <span className="loading loading-ring loading-xl"></span>
    }
    if(!user){
       return <Navigate to='/signin' state={location.pathname}></Navigate>
    }

    return (
        children
    );
};

export default PrivetRouter;