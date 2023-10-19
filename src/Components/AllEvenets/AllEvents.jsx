import React from 'react';
import SingleEvent from './SingleEvent';

const AllEvents = ({allEventData}) => {
    const eventCard = allEventData;
    return (
        <div className='p-5 md:p-10 lg:p-20 flex flex-col justify-center'>
            <h1 className='text-4xl text-center py-5 font-bold'>All Events</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto justify-center'>
                {
                    allEventData?.map(eventCard=>(
                        <SingleEvent key={eventCard.id} eventCard={eventCard}></SingleEvent>
                    ))
                }
            </div>
        </div>
    );
};

export default AllEvents;