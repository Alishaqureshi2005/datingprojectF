import React from 'react';
import GameIcon from '../../../../assets/Images/game/G7.png';
import GameWhiteIcon from '../../../../assets/Images/game/G10.png';
import ActivityIcon from '../../../../assets/Images/game/G8.png';
import NotificationIcon from '../../../../assets/Images/game/G9.png';
import PageIcon from '../../../../assets/Images/game/PPAGE.png';
import ActionIcon from '../../../../assets/Images/game/G11.png';
import CraftIcon from '../../../../assets/Images/game/G12.png';
const GameSidebar = () => {
  return (
    <div className="bg-gray-200 p-4 fixed top-12 left-0 shadow-md w-[17rem]  h-[100vh] overflow-y-scroll scrollbar font-sans">
      <div className="">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-purple-800">Gaming</h1>
          <i className="fas fa-sun text-purple-800"></i>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search gaming"
              className="w-full p-2 pl-10 rounded-full bg-white text-purple-800"
            />
            <i className="fas fa-search absolute left-3 top-3 text-purple-800"></i>
          </div>
        </div>

        {/* Play Games Button */}
        <div className="mb-4">
          <button className="w-full flex items-center p-2 rounded-lg bg-gray-300 text-purple-800">
            <img
              src={GameIcon}
              alt="Game controller icon"
              className="w-6 h-6 mr-2"
            />
            Play games
          </button>
        </div>

        {/* Gaming Activity and Notifications */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <img
              src={ActivityIcon}
              alt="Gaming activity icon"
              className="w-6 h-6 mr-2"
            />
            <span className="text-xl font-bold text-purple-800">Gaming Activity</span>
          </div>
          <div className="flex items-center mb-2">
            <img
              src={NotificationIcon}
              alt="Notifications icon"
              className="w-6 h-6 mr-2"
            />
            <span className="text-xl font-bold text-purple-800">Notifications</span>
          </div>
        </div>

        {/* Your Games */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-lg font-bold text-purple-800">Your games</span>
            <a href="#" className="text-sm text-purple-800">
              See all
            </a>
          </div>
          <p className="text-sm text-purple-800">
            Save a game to your games to create a shortcut for it here.
          </p>
        </div>

        {/* Save Games */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <img
              src={PageIcon}
              alt="Save games icon"
              className="w-6 h-6 mr-2"
            />
            <span className="text-lg font-bold text-purple-800">Save games</span>
          </div>
          <hr className="border-purple-800" />
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-xl font-bold text-purple-800 mb-2">Categories</h2>
          <div className="flex items-center mb-2">
            <img
              src={GameWhiteIcon}
              alt="Classics icon"
              className="w-6 h-6 mr-2"
            />
            <span className="text-lg text-purple-800">Classics</span>
          </div>
          <div className="flex items-center mb-2">
            <img
              src={ActionIcon}
              alt="Action icon"
              className="w-6 h-6 mr-2"
            />
            <span className="text-lg text-purple-800">Action</span>
          </div>
          <div className="flex items-center mb-2">
            <img
              src={CraftIcon}
              alt="Crafts icon"
              className="w-6 h-6 mr-2"
            />
            <span className="text-lg text-purple-800">Crafts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSidebar;
