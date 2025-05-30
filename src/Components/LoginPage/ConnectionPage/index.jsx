import React from "react";
import ConnectionImg from "../../../assets/Images/bg4.png"
const ConnectionPage = () => {
  return (
    <div className="bg-[#FFF9F3] min-h-screen flex flex-col md:flex-row items-center justify-center lg:justify-end p-6"
    style={{
        backgroundImage: `url(${ConnectionImg})`,
        backgroundSize: 'cover', // Ensures the container is fully covered
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Fixes the background during scrolling
        height: '100vh',
      }}
    >
      

      {/* Content Section */}
      <div className="w-full sm:w-2/3 lg:w-1/3 text-left flex flex-col justify-start items-center lg:items-start ">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
          Connecting
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold text-[#FF6B6B]">
          PEOPLE
        </h1>
        <p className="text-lg md:text-xl text-center lg:text-start text-[#191a1c] mt-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#FF6B6B] text-white text-lg rounded-full">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default ConnectionPage;
