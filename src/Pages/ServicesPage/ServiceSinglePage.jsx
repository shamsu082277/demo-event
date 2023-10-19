import React from 'react';

const ServiceSinglePage = ({ item }) => {
    const { id, event_name, event_image, event_price, full_description } = item || {};
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={event_image} alt={event_name} /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{event_name}</h2>
                <p>{full_description}</p>
                <p className='text-xl font-medium'>Event Price: $ {event_price}</p>
                <button
                        className="block w-40 select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                        type="button"
                        data-ripple-light="true"
                    >
                        Book Now
                    </button>
            </div>
        </div>
    );
};

export default ServiceSinglePage;