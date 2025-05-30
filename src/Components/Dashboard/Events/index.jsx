import React from 'react';
import EventSidebar from './EventSidebar';
import EventNavbar from './EventNavbar';
import EventMain from './EventMain';
import { useSelector } from 'react-redux';

const Events = () => {
  const EventCard = useSelector((state) => state.data.profileData.events.event) || [];

  const categories = useSelector((state) => state.data.profileData.events.categories) || [];
  
  return (
    <div className='grid grid-cols-10 '>
      <div className='hidden   md:block md:col-span-3 lg:col-span-3 xl:col-span-2 '>
        <EventSidebar events={EventCard} categories={categories} />
      </div>
      <div className='hidden xl:block xl:col-span-1'></div>
      <div className=' sm:px-4 col-span-10 md:col-span-7 mt-10  md:pr-8 lg:pr-0 lg:col-span-6 '>
        <EventNavbar />
        <EventMain EventCard={EventCard} c />
      </div>
    </div>

  );
};

export default Events;






