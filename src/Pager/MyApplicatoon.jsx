import React, { Suspense, use } from 'react';
import ChildrenApplication from './ChildrenApplication';
import Applicationlist from './Applicationlist';
import { Autchontex } from '../Contex/AuthContex';
import { MyApplicatoonPromice } from '../api/Myapi';



const MyApplicatoon = () => {

    const  {user} =  use(Autchontex)

    return (
        <div>
            <ChildrenApplication></ChildrenApplication>
            <Suspense fallback={'loding yoour application'}>
                <Applicationlist MyApplicatoonPromice={MyApplicatoonPromice(user.email)}></Applicationlist>
            </Suspense>

        </div>
    );
};

export default MyApplicatoon;