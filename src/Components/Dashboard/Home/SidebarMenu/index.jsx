import React from "react";
import Dp from "../../../../assets/Images/profile_png/dp.png";
const SidebarMenu = ({userDetails}) => {
  return (
    <div className="bg-gray-200 w-full lg:w-3/4 xl:w-3/5 p-4 h-[93.5vh] sticky top-12">
      
      <div className='text-blue-900 border-b mb-4 border-gray-500 pb-4 flex gap-2 mt-4 items-center'>
        <img
          src={userDetails?.profilePic}
          alt="Home icon"
          className="w-14 h-14 rounded-full"
        />
        <h1 className="font-bold mb-4 text-[20px]">{userDetails?.user.firstName+" "+userDetails?.user.surname}</h1>

      </div>

      {/* Menu Items */}
      <ul>
        <li className="flex items-center mb-4">
          <i className="fas fa-user-friends text-blue-500 text-xl mr-3"></i>
          <span className="text-lg">Friends</span>
        </li>
        <li className="flex items-center mb-4">
          <i className="fas fa-clock text-blue-500 text-xl mr-3"></i>
          <span className="text-lg">Memories</span>
        </li>
        <li className="flex items-center mb-4">
          <i className="fas fa-bookmark text-pink-500 text-xl mr-3"></i>
          <span className="text-lg">Saved</span>
        </li>
        <li className="flex items-center mb-4">
          <i className="fas fa-users text-blue-500 text-xl mr-3"></i>
          <span className="text-lg">Groups</span>
        </li>
        <li className="flex items-center mb-4">
          <i className="fas fa-video text-blue-500 text-xl mr-3"></i>
          <span className="text-lg">Video</span>
        </li>
        <li className="flex items-center mb-4">
          <i className="fas fa-store text-blue-500 text-xl mr-3"></i>
          <span className="text-lg">Marketplace</span>
        </li>
        <li className="flex items-center mb-4">
          <i className="fas fa-newspaper text-blue-500 text-xl mr-3"></i>
          <span className="text-lg">Feeds</span>
        </li>
        <li className="flex items-center mb-4">
          <i className="fas fa-calendar-alt text-red-500 text-xl mr-3"></i>
          <span className="text-lg">Events</span>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
