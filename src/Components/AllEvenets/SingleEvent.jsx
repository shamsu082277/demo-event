import React from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const SingleEvent = ({ eventCard }) => {
    const { id, event_name, event_image, event_price, short_description } = eventCard || {};
    return (
        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="5000"> 
            <div className="relative flex w-full max-w-[26rem]  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg min-h-[400px]">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                        src={event_image}
                        alt={event_name}
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                </div>
                <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                        <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {event_name}
                        </h5>
                    </div>
                    <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                        {short_description}
                    </p>
                    <p className="block font-sans text-base font-medium leading-relaxed text-gray-700 antialiased mt-2">
                        Price: $ {event_price}
                    </p>

                </div>
                <div className="p-6 pt-3">
                    <Link to ={`/services/${id}`}>
                    <button
                        className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        View Details
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;