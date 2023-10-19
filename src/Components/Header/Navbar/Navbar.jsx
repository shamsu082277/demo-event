import React from 'react';
import defaultProfile from '../../../../public/Image/shadow.png';
import logo from '../../../../public/Image/logo.png'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const navLinks = (
        <>
            <li>    
                <NavLink className={({ isActive, isPending }) =>
                    isPending
                        ? "pending"
                        : isActive
                            ? "text-pink-500 underline underline-offset-4 font-bold !focus:bg-transparent block py-2 pl-2 pr-2 rounded"
                            : "block py-2 pl-2 pr-2 text-gray-900 rounded"} to="/">Home</NavLink>
            </li>
            {
                user?.email?
                <li>
                <NavLink className={({ isActive, isPending }) =>
                    isPending
                        ? "pending"
                        : isActive
                            ? "text-pink-500 underline underline-offset-4 font-bold !focus:bg-transparent block py-2 pl-2 pr-2 rounded"
                            : "block py-2 pl-2 pr-2 text-gray-900 rounded"} to="/About">About</NavLink>
                </li>
                :
                <li className='hidden'></li>
            }
            
            <li>
                <NavLink className={({ isActive, isPending }) =>
                    isPending
                        ? "pending"
                        : isActive
                            ? "text-pink-500 underline underline-offset-4 font-bold !focus:bg-transparent block py-2 pl-2 pr-2 rounded"
                            : "block py-2 pl-2 pr-2 text-gray-900 rounded"} to="/Services">Services</NavLink>
            </li>
            {
                user?.email?
                <li>
                <NavLink className={({ isActive, isPending }) =>
                    isPending
                        ? "pending"
                        : isActive
                            ? "text-pink-500 underline underline-offset-4 font-bold !focus:bg-transparent block py-2 pl-2 pr-2 rounded"
                            : "block py-2 pl-2 pr-2 text-gray-900 rounded"} to="/Blog">Blog</NavLink>
                </li>
                :
                <li className='hidden'></li>
            }
            <li>
                <NavLink className={({ isActive, isPending }) =>
                    isPending
                        ? "pending"
                        : isActive
                            ? "text-pink-500 underline underline-offset-4 font-bold !focus:bg-transparent block py-2 pl-2 pr-2 rounded"
                            : "block py-2 pl-2 pr-2 text-gray-900 rounded"} to="/Contact">Contact</NavLink>
            </li>
        </>);
    return (
        <div>
            <nav className="bg-white sticky w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="flex flex-wrap items-center justify-center md:justify-around lg:justify-around mx-auto p-4">
                    <div>
                    <Link to={"/"}>
                        <img src={logo} className="h-16 mr-3 mx-auto" alt="Logo" />
                    </Link>
                    </div>
                    <div className="lg:order-2 ">
                        {
                        user?.email?
                        <div className='flex items-center space-x-4'>
                            <div className='flex space-x-4 items-center'>
                                <p className='font-bold'>{user.displayName}</p>
                                <img className="w-8 h-8 rounded-full" src={user.photoURL} alt={user.displayName} />
                            </div>
                                <button className='bg-pink-500 px-3 py-2 rounded-md text-white font-medium 'onClick={logOut}>LOGOUT</button>
                        </div>
                        :
                        <div className='flex items-center space-x-4'>
                            <div className='flex space-x-4 items-center'>
                                <p></p>
                                <img className="w-8 h-8 rounded-full" src={defaultProfile} alt="user photo" />
                            </div>
                            <Link to={'/login'}>
                                <button className='bg-pink-500 px-3 py-2 rounded-md text-white font-medium '>LOGIN</button>
                            </Link>
                        </div>

                        }

                    </div>
                    <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        {/* Menu item */}
                        <ul className="flex flex-row justify-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
