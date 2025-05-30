import React from "react";
import Dp from "../../../assets/Images/profile_png/dp.png";

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="bg-gray-800 sticky top-0 p-4 flex justify-between items-center">
            {/* Toggle button for sidebar */}
            <div>
                <button
                    onClick={toggleSidebar}
                    className="text-white lg:hidden focus:outline-none"
                >
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>
            {/* Right-side icons */}
            <div className="flex items-center space-x-6">
                <div className="relative">
                    <i className="fas fa-envelope text-white text-xl"></i>
                    <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full px-1">
                        3
                    </span>
                </div>
                <div className="relative">
                    <i className="fas fa-bell text-white text-xl"></i>
                    <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full px-1">
                        2
                    </span>
                </div>
                <span className="text-white">EHT</span>
                <img alt="User avatar" className="w-8 h-8 rounded-full" src={Dp} />
            </div>
        </nav>
    );
};

export default Navbar;
