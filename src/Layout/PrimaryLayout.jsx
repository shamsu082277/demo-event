import React from 'react';
import Navbar from '../Components/Header/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const PrimaryLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default PrimaryLayout;