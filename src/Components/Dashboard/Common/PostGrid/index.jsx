// PostGrid.js
import React from "react";

const PostGrid = () => {
  return (
    <div className="bg-gray-200 rounded-lg py-4 w-full mb-4">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center pb-4 px-4 mb-4 border-b border-gray-300">
        <h1 className="text-xl font-bold text-blue-900">Posts</h1>
        <div className="flex space-x-2">
          <button className="flex items-center space-x-1 bg-gray-300 text-blue-900 px-3 py-1 rounded-md">
            <i className="fas fa-sliders-h"></i>
            <span>Filters</span>
          </button>
          <button className="flex items-center space-x-1 bg-gray-300 text-blue-900 px-3 py-1 rounded-md">
            <i className="fas fa-cog"></i>
            <span>Manage posts</span>
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center justify-center w-1/2 text-blue-900">
          <i className="fas fa-bars"></i>
          <span className="ml-1">List view</span>
        </div>
        <div className="flex items-center justify-center w-1/2 text-blue-900">
          <i className="fas fa-th"></i>
          <span className="ml-1">Grid view</span>
        </div>
      </div>
    </div>
  );
};

export default PostGrid;
