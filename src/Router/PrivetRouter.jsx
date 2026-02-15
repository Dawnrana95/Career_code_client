import React, { use } from 'react';
import { Autchontex } from '../Contex/AuthContex';
import { Navigate, useLocation } from 'react-router';

const PrivetRouter = ({children}) => {

    const {user} = use(Autchontex)
    
    const location =useLocation()
    console.log(location.pathname);

    if(!user){
       return <Navigate to='/signin' state={location.pathname}></Navigate>
    }

    return (
        children
    );
};

export default PrivetRouter;