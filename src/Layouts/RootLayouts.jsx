import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pager/Footer';
import Navbar from '../Pager/Navbar';

const RootLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;