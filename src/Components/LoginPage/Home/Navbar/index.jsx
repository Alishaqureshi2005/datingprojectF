import React, { useState } from "react";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
const tabs = [
    { name: "Home", id: 'home' },
    { name: "Events", id: 'events' },
    { name: "Hiking Group", id: 'hiking group' },
    { name: "Game Night", id: 'game night' },
]
const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const navigation = "bg-custom-pink text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white py-2 px-3 sm:px-6 md:px-8 rounded-full shadow-md hover:bg-pink-400 transition";

    return (
        <nav className="navbar flex1">
            {/* Overlay for Sidebar */}
            {openSidebar && (
                <div className="overlay" onClick={() => setOpenSidebar(!openSidebar)}></div>
            )}

            <div className="w-3/12 text-xl sm:text-3xl md:text-4xl text-left pl-4 font-bold text-custom-blue">
                LOGO
            </div>

            {/* Sidebar and Tabs */}
            <div
                className={`box flex-center1 tabs-group sidebar ${openSidebar ? "visible" : ""
                    }`}
            >
                {/* Close Button for Sidebar */}
                <div
                    className="flex-center1 icon-wrapper cancel-btn"
                    onClick={() => setOpenSidebar(!openSidebar)}
                >
                    <FaTimes />
                </div>

                {/* Tabs */}
                {tabs.map((tab, index) => (
                    <a
                        href={`#${tab.id}`} // Using href to navigate by section ID
                        className={`${navigation} tab`}
                        onClick={() => setOpenSidebar(false)}
                        key={index}
                    >
                        {tab.name}
                    </a>
                ))}
            </div>

            {/* Buttons and Menu Icon */}
            <div className="box flex-center1 buttons">
                <div
                    className="flex-center1 icon-wrapper menu-btn"
                    onClick={() => setOpenSidebar(!openSidebar)}
                >
                    <HiMenu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
