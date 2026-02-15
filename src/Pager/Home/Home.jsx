import React from 'react';
import Banner from './Banner';
import Hotjobs from './Hotjobs';
import { useLoaderData } from 'react-router';

const Home = () => {

    const userData = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Hotjobs userData={userData}></Hotjobs>
        </div>
    );
};

export default Home;