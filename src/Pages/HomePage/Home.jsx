import React from 'react';
import Banner from '../../Components/Header/Banner/Banner';
import AllEvents from '../../Components/AllEvenets/AllEvents';
import AboutUs from './../../Components/AboutUs/AboutUs';
import Faq from './../../Components/FAQ/Faq';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const allEventData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <AllEvents allEventData={allEventData}></AllEvents>
            <AboutUs></AboutUs>
            <Faq></Faq>
        </div>
    );
};

export default Home;