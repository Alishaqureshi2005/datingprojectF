import React from "react";

const Searchbar = () => {
    return (
        <div className="bg-gray-200 p-4 w-full  rounded-lg shadow-md ">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search Your ID"
                    className="w-full p-2 pl-10 rounded-lg bg-gray-300 focus:outline-none"
                />
                <i className="fas fa-search absolute left-3 top-3 text-black"></i>
            </div>
        </div>
    );
};

export default Searchbar;
