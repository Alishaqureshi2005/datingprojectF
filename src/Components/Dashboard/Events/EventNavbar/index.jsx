import React, { useState, useEffect } from 'react';
import 'flatpickr/dist/flatpickr.min.css';
import Flatpickr from 'react-flatpickr';
import { FaMapMarkerAlt, FaChevronDown, FaCalendarAlt } from 'react-icons/fa';

const EventNavbar = () => {
    const [selectedDate, setSelectedDate] = useState('Any date');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown')) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center sm:items-start sm:justify-start p-4 bg-gray-200 sm:rounded-lg md:pb-6">
            <h1 className="text-2xl font-bold text-purple-800 mb-4">Discover events</h1>
            <div className="flex flex-col gap-2 lg:flex-row space-x-2 relative">
                {/* Location Dropdown */}
                <div className='flex gap-2'>
                    <div className="relative dropdown sm:text-base text-sm">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center space-x-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
                            <FaMapMarkerAlt className="text-pink-500" />
                            <span>My location</span>
                            <FaChevronDown className="text-purple-800" />
                        </button>
                        {isDropdownOpen && (
                            <div className="dropdown-content bg-gray-300 text-gray-700 rounded-md mt-2 absolute">
                                <a href="#" className="block px-4 py-2">Location 1</a>
                                <a href="#" className="block px-4 py-2">Location 2</a>
                                <a href="#" className="block px-4 py-2">Location 3</a>
                            </div>
                        )}
                    </div>

                    {/* Date Picker */}
                    <div className="relative sm:text-base text-sm">
                        <button id="datePickerButton" className="flex items-center space-x-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
                            <FaCalendarAlt className="text-red-500" />
                            <span>{selectedDate}</span>
                            <FaChevronDown className="text-purple-800" />
                        </button>
                        <Flatpickr
                            options={{
                                onChange: (selectedDates, dateStr) => {
                                    setSelectedDate(dateStr || 'Any date');
                                },
                            }}
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex gap-2'>
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Top</button>
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Friends</button>
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Following</button>
                </div>
            </div>
        </div>
    );
};

export default EventNavbar;
