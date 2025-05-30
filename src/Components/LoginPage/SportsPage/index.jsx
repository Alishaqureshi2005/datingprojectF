import React from "react";
import SportsImg from "../../../assets/Images/bg6.png";

const SportsPage = () => {
  return (
    <div
      className="relative w-full  flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${SportsImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width:"100%",
      }}
    >
      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        
        <div className="absolute  lg:bottom-20 left-1/3 sm:left-[42%] lg:left-64 lg:transform lg:-translate-x-1/2">

          <button className="bg-pink-300 text-white font-bold py-2 px-12 rounded-full shadow-lg hover:bg-pink-400 transition">
            Sports
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full text-center  pb-5 xl:pb-0 ">
        <span className="text-white text-sm sm:text-lg font-bold">
          ©Copyright@2024
        </span>
      </div>
    </div>
  );
};

export default SportsPage;
