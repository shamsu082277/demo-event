import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ServiceSinglePage from './ServiceSinglePage';
import AllEvents from '../../Components/AllEvenets/AllEvents';

const ServicesPage = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const items = useLoaderData();

  useEffect(() => {
    const findEvent = items?.find((item) => item.id == id);
    setItem(findEvent);
  }, [id, items]);
  const allEventData = useLoaderData();
  return (
    <div className="container mx-auto py-8 px-2">
      {/* Conditional rendering */}
      {item ? (
        <ServiceSinglePage item={item} />
      ) : (
        // <p className='text-center text-2xl font-bold py-12'>There is no event details available</p>
        <AllEvents allEventData={allEventData}></AllEvents>
      )}
    </div>
  );
};

export default ServicesPage;
