import React, { Suspense, use } from 'react';
import { Autchontex } from '../Contex/AuthContex';
import MyPostDataList from './MyPostDataList';
import { MyAddJobPromice } from '../api/Addjobs';

const MyPostedJob = () => {
    const { user } = use(Autchontex);

    return (
        <div>
            <Suspense fallback="loding ......">
                <MyPostDataList  MyAddJobPromice={MyAddJobPromice(user.email)}></MyPostDataList>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;