import React, { useState } from "react";

const EventSidebar = ({ events, categories }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  return (
    <div className="bg-gray-200 p-4 fixed top-14 left-0 h-[93vh] overflow-y-scroll scrollbar">
      {/* Header */}
      <h1 className="text-lg font-bold text-purple-800 mb-4">Events</h1>

      {/* Search Box */}
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search games"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 pl-10 rounded-full bg-gray-300 text-gray-600"
        />
        <i className="fas fa-search absolute left-3 top-2.5 text-gray-600"></i>
      </div>

      {/* Navigation */}
      <div className="mb-4">
        <div className="flex items-center p-2 rounded-full bg-gray-300 text-purple-800 mb-2">
          <i className="fas fa-home mr-2"></i>
          <span>Home</span>
        </div>

        {/* Dropdown */}
        <div className="relative mb-2">
          <div
            className="flex items-center p-2 rounded-full text-purple-800 cursor-pointer"
            onClick={toggleDropdown}
          >
            <i className="fas fa-user-circle mr-2"></i>
            <span>Your events</span>
            <i
              className={`fas fa-chevron-down ml-auto ${isDropdownOpen ? "rotate-180" : ""}`}
            ></i>
          </div>
          {isDropdownOpen && (
            <div className="mt-2 bg-gray-200 rounded-lg shadow-lg">
              {events.map((event, index) => (
                event.isOwner && (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-purple-800 hover:bg-gray-300"
                  >
                    {event.name}
                  </a>
                )
              ))}

            </div>
          )}
        </div>

        <div className="flex items-center p-2 rounded-full text-purple-800 mb-4">
          <i className="fas fa-bell mr-2"></i>
          <span>Notifications</span>
        </div>

        <button className="w-full p-2 rounded-lg bg-blue-600 text-white font-bold">
          + Create New Event
        </button>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-lg font-bold text-purple-800 mb-4">Categories</h2>
        {categories.map((category, index) => (
          <div key={index} className="flex items-center text-black mb-2">
            <i className={`${category.icon} mr-2`}></i>
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSidebar;
