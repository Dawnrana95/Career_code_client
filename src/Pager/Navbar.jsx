import React, { use } from 'react';
import { NavLink } from 'react-router';
import AuthProvider from '../Contex/AuthProvider';
import { Autchontex } from '../Contex/AuthContex';

const Navbar = () => {

    const { user, signOutUser } = use(Autchontex)

    const handalSignout = () => {
        signOutUser()
        .then( () =>{
            // console.log('signout sixes Full');
        })
        .catch(error => {
            console.log(error);
        })
    }

    const links = <>
        {
            user && <>
                <li className='w-1xs text-center md:gap-4'>
                    <NavLink className='btn' to="/">Home</NavLink>
                    <NavLink className='btn' to="/myapplication">My Application</NavLink>
                </li>
            </>
        }
        {
            user && <>
                <li>
                    <NavLink className='btn' to="/adejobe">Add Jobs</NavLink>
                    <NavLink className='btn' to="/postjobe">My Post Jobes</NavLink>
                </li>
            </>
        }
    </>


    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-500 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="md:gap-4 px-2 flex">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={handalSignout} className='btn'>Sign Out</button> :
                            <>
                                <NavLink className="btn" to="/regoster">Register</NavLink>
                                <NavLink className="btn" to="/signin">SignIn</NavLink>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;