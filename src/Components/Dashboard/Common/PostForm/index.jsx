// PostForm.js
import React, { useState } from "react";
import PostModal from "../../Home/PostModal";
import Avatar from "../../../../assets/Images/profile_png/dp.png";
import { FaVideo, FaImages, FaCalendarAlt, FaSmile, FaMapMarkerAlt, FaTag } from 'react-icons/fa';

const PostForm = ({ userDetails }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header Section */}
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800">Create Post</h2>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {/* User Info and Input */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <img
              src={userDetails?.profilePic || Avatar}
              alt="User avatar"
              className="w-14 h-14 rounded-full border-2 border-blue-500 shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          
          <div className="flex-1">
            <div className="mb-2">
              <h3 className="font-medium text-gray-800">{userDetails?.name || 'User'}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span>Add location</span>
                </button>
                <span>•</span>
                <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <FaTag className="w-4 h-4" />
                  <span>Tag people</span>
                </button>
              </div>
            </div>
            
            <div className={`relative rounded-xl transition-all duration-200 ${isFocused ? 'bg-gray-50 ring-2 ring-blue-500' : 'bg-gray-50'}`}>
              <textarea
                placeholder="What's on your mind?"
                className="w-full bg-transparent rounded-xl px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none resize-none"
                rows="3"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <button className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors">
                <FaSmile className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3 p-3 bg-gray-50 rounded-xl">
          <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 group">
            <FaVideo className="w-6 h-6 text-red-500 mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-700">Live Video</span>
          </button>

          <PostModal userDetails={userDetails}>
            <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 group">
              <FaImages className="w-6 h-6 text-green-500 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-gray-700">Photo/Video</span>
            </button>
          </PostModal>

          <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 group">
            <FaCalendarAlt className="w-6 h-6 text-yellow-500 mb-1 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-700">Life Event</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-50 border-t border-gray-100">
        <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
          Post
        </button>
      </div>
    </div>
  );
};

export default PostForm;
