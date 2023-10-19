import React from 'react';
import aboutUsTeamImage from '../../../public/Image/aboutUsTeamImage.jpg'


const AboutUsPage = () => {
    return (
        <div className='container mx-auto py-8 px-2'>
            <h1 className='text-4xl text-center py-10 font-bold'>About US</h1>
                <img className='rounded-md mx-auto' src={aboutUsTeamImage} alt="" />
            <div className='flex flex-col justify-center px-10 space-y-5'>
                <h1 className='text-4xl font-medium text-black mt-14'>Celebrate with Us!</h1>
                <p className='text-base text-gray-600'>Welcome to EVENT ORG, your premier destination for all things related to social events and celebrations. We are thrilled to share our story and mission with you.
                    <br/>
                    <br/>
                    At EVENT ORG, we understand that life's most cherished moments are meant to be celebrated in style. Whether it's a birthday, an anniversary, a graduation, or any other special occasion, we believe that every event deserves to be extraordinary. That's why we've dedicated ourselves to creating an online platform where you can find everything you need to make your celebrations unforgettable.
                    <br/>
                    <br/>
                    
                    Our journey began with a passion for bringing people together and making their dreams come true. We realized that planning and organizing events can be both exciting and overwhelming. That's why we set out to simplify the process, providing you with a one-stop destination for all your event planning needs.
                    <br/>
                    <br/>

                    EVENT ORG is not just a website; it's a community of event enthusiasts, professionals, and visionaries who are here to support you at every step of your event planning journey. From finding the perfect venue and choosing the most exquisite decorations to selecting the finest caterers and entertainment options, we've got you covered.
                    <br/>
                    <br/>

                    What sets us apart is our commitment to excellence. We take pride in curating a wide range of resources, tips, and inspiration to help you craft a unique and memorable event that reflects your personality and style. Our team of experts is dedicated to staying ahead of the latest trends and technologies in the event industry to ensure that your celebrations are not only extraordinary but also seamless and stress-free.
                    <br/>
                    <br/>

                    At EVENT ORG, we believe that every event has a story, and we are here to help you tell yours. Join us on this exciting journey of creating unforgettable memories, and let us be a part of your special moments. Thank you for choosing EVENT ORG as your trusted partner in celebration.</p>
                <div className='space-x-5'>
                    <button className='focus:outline-none text-pink-500  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-auto shadow-md'>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;