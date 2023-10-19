import React from 'react';
import { Carousel } from "@material-tailwind/react";
import slide1 from "../../../../public/Image/weeding.jpg"
import slide2 from "../../../../public/Image/holiday.jpg"
import slide3 from "../../../../public/Image/birthday.jpg"
const Banner = () => {
    return (
        <Carousel>
            <img
                src={slide1}
                alt="image 1"
                className="h-[90vh] w-full object-cover"
            />
            <img
                src={slide2}
                alt="image 2"
                className="h-[90vh] w-full object-cover"
            />
            <img
                src={slide3}
                alt="image 3"
                className="h-[90vh] w-full object-cover"
            />
        </Carousel>
    );
};

export default Banner;
