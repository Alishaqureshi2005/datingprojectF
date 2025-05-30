import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaCaretDown,
  FaEllipsisH,
  FaUserFriends,
  FaPhotoVideo,
  FaImages,
  FaVideo,
  FaListUl
} from "react-icons/fa";
import { RiHome3Fill } from "react-icons/ri";

const Navbar = () => {
  const location = useLocation();
  const activeClass = "text-blue-600 font-bold border-b-4 border-blue-500";
  const inactiveClass = "text-gray-600 hover:text-blue-500 transition-colors";

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Navigation Links */}
          <div className="flex space-x-4 sm:space-x-6 items-center">
            <Link
              to="/dashboard"
              className={`flex items-center space-x-2 px-2 h-full ${
                location.pathname === "/dashboard" ? activeClass : inactiveClass
              }`}
            >
              <RiHome3Fill className="text-xl" />
              <span className="hidden sm:block">Posts</span>
            </Link>

            <Link
              to="/dashboard/about"
              className={`px-2 h-full flex items-center ${
                location.pathname === "/dashboard/about" ? activeClass : inactiveClass
              }`}
            >
              About
            </Link>

            <Link
              to="/dashboard/friend"
              className={`px-2 h-full items-center hidden sm:flex ${
                location.pathname === "/dashboard/friend" ? activeClass : inactiveClass
              }`}
            >
              <FaUserFriends className="sm:hidden" />
              <span className="hidden sm:block">Friends</span>
            </Link>

            <Link
              to="/dashboard/photos"
              className={`px-2 h-full flex items-center ${
                location.pathname === "/dashboard/photos" ? activeClass : inactiveClass
              }`}
            >
              <FaImages className="sm:hidden" />
              <span className="hidden sm:block">Photos</span>
            </Link>

            <Link
              to="/dashboard/videos"
              className={`px-2 h-full flex items-center ${
                location.pathname === "/dashboard/videos" ? activeClass : inactiveClass
              }`}
            >
              <FaVideo className="sm:hidden" />
              <span className="hidden sm:block">Videos</span>
            </Link>

            <Link
              to="/dashboard/reels"
              className={`px-2 h-full items-center hidden sm:flex ${
                location.pathname === "/dashboard/reels" ? activeClass : inactiveClass
              }`}
            >
              <FaPhotoVideo className="sm:hidden" />
              <span className="hidden sm:block">Reels</span>
            </Link>

            <div className="relative group">
              <button className={`px-2 h-full flex items-center ${inactiveClass}`}>
                <FaListUl className="sm:hidden" />
                <span className="hidden sm:flex items-center">
                  More
                  <FaCaretDown className="ml-1 text-sm" />
                </span>
              </button>
            </div>
          </div>

          {/* More Options Button */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <FaEllipsisH className="text-gray-600 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;