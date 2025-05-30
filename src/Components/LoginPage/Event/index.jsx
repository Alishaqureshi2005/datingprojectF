import React from 'react';
import EventImg from "../../../assets/Images/bg2.png"
import CardImg from "../../../assets/Images/c2.png"
const EventsPage = () => {
  return (
    // <div className="bg-gradient-to-r from-yellow-200 via-pink-200 to-green-200 flex flex-col items-center justify-center min-h-screen overflow-hidden">
    <div
      className="flex flex-col items-center justify-center min-h-screen relative w-full "
      style={{
        backgroundImage: `url(${EventImg})`,
        backgroundSize: 'cover', // Ensures the container is fully covered
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Fixes the background during scrolling
        height: '100vh',
      }}
    >
      <div className="absolute top-1/5 left-1/5 sm:left-1/4 md:left-1/3 lg:top-20 lg:left-10 p-4">
        <div className=" rounded-lg p-6 w-64"
          style={{
            backgroundImage: `url(${CardImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "520px",
            minWidth: "310px",
          }}
        >
          <div className='absolute top-[67%]  left-0 right-0 transform -translate-y-1/2 pr-8 pl-8 rounded-b-lg'>
            <h2 className="text-2xl font-bold text-center mb-2">Events</h2>
            <p className="text-center text-gray-600 mb-4">
              Occasions mark special milestones in our lives, like birthdays and weddings. Occasions mark special milestones in our lives, like birthdays and weddings.
            </p>
            <div className="flex justify-center">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-full">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default EventsPage;
