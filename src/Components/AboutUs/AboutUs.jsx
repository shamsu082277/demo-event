import React from 'react';
import aboutUsImage from '../../../public/Image/aboutUus.jpg'
import { Link } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutUs = () => {
    return (
        <div className='container mx-auto py-8 px-2'>
            <h1 className='text-4xl text-center py-10 font-bold'>About US</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between'>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <img className='rounded-md' src={aboutUsImage} alt="" />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className='flex flex-col justify-center px-10 space-y-5'>
                    <h1 className='text-4xl font-medium text-black'>Celebrate with Us!</h1>
                    <p className='text-base text-gray-600'>Welcome to EVENT ORG, your premier destination for all things related to social events and celebrations. We are thrilled to share our story and mission with you.
                        At EVENT ORG, we understand that life's most cherished moments are meant to be celebrated in style. Whether it's a birthday, an anniversary, a graduation, or any other special occasion, we believe that every event deserves to be extraordinary. That's why we've dedicated ourselves to creating an online platform where you can find everything you need to make your celebrations unforgettable.</p>
                    <div className='space-x-5'>
                    <Link to={`/about`}>
                    <button className='focus:outline-none cursor-pointer text-white bg-pink-500 hover:bg-pink-600 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-auto'>Read More</button>
                    </Link>
                    <Link to={`/contact`}>
                    <button className='focus:outline-none text-pink-500  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-auto shadow-md'>Contact Us</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;