import React from 'react';
import MapIcon from '../../../../assets/Images/events/1.png';
import ActivityIcon from '../../../../assets/Images/game/G8.png';

const GroupsSidebar = ({Groups}) => {
  
  
  return (
    <div className="bg-gray-200 p-4 fixed top-12 left-0 w-[17rem]  h-[100vh] overflow-y-scroll scrollbar font-sans">
      <div className="">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-purple-800">Groups</h1>
          <i className="fas fa-sun text-purple-800"></i>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Vedios"
              className="w-full p-2 pl-10 rounded-full bg-gray-300 text-gray-600"
            />
            <i className="fas fa-search absolute left-3 top-3 text-gray-600"></i>
          </div>
        </div>

        {/* Play Games Button */}
        <div className="mb-4">
          <button className="w-full flex items-center p-2 rounded-lg bg-gray-300 text-purple-800">
            <img
              src={MapIcon}
              alt="Game controller icon"
              className="w-6 h-6 mr-2"
            />
            Your Feed
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
            <span className="text-xl font-bold text-purple-800">Discover</span>
          </div>
          <div className="flex items-center mb-2">
            <img
              src={ActivityIcon}
              alt="Gaming activity icon"
              className="w-6 h-6 mr-2"
            />
            <span className="text-xl font-bold text-purple-800">Your Group</span>
          </div>

        </div>
        <div className="mb-4">
          <button className="w-full text-center p-2 rounded-lg bg-gray-300 text-purple-800">

            + Create New Group
          </button>
        </div>


        {/* Categories */}
        <div className='border-b border-white'>
          <h2 className="text-xl font-bold text-purple-800 mb-2">Groups You Manage</h2>
          {Groups.managedGroups.map((group, index) => (
            <div key={index} className="flex items-center mb-2">
              <img src={group.icon} alt="Group icon" className="w-6 h-6 mr-2" />
              <span className="text-lg text-purple-800">{group.text}</span>
            </div>
          ))}

        </div>
        {/* Groups You Join */}
        <div className=''>
          <h2 className="text-xl font-bold text-purple-800 mb-2">Groups You Join</h2>
          {Groups.joinedGroups.map((group, index) => (
            <div key={index} className="flex items-center mb-2">
              <img src={group.icon} alt="Group icon" className="w-6 h-6 mr-2" />
              <span className="text-lg text-purple-800">{group.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupsSidebar;
