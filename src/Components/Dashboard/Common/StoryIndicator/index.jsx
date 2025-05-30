import React, { useState, useEffect } from 'react';
import { getUserStories } from '../../../../utils/Apis';
import StoryViewer from '../StoryViewer';

const StoryIndicator = ({ userId, profilePicture, username }) => {
  const [hasStories, setHasStories] = useState(false);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    checkForStories();
  }, [userId]);

  const checkForStories = async () => {
    try {
      const stories = await getUserStories(userId, token);
      console.log(stories);
      setHasStories(stories.length > 0);
    } catch (error) {
      console.error('Error checking stories:', error);
    }
  };

  return (
    <>
      <div 
        className={`relative cursor-pointer group transition-all duration-300 ${hasStories ? 'hover:scale-105' : ''}`}
        onClick={() => hasStories && setIsViewerOpen(true)}
      >
        {/* Gradient border for stories */}
        {/* {hasStories && (
          <div className="absolute -inset-1 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
        )} */}
        
        {/* Profile picture container */}
        <div className="relative w-20 h-20 rounded-full overflow-hidden  p-[2px]">
          <img
            src={profilePicture}
            alt={username}
            className="w-full h-full rounded-full object-cover"
          />
          
          {/* Story indicator dot */}
          {hasStories && (
            <div className="absolute top-1 right-1 w-4 h-4  rounded-full border-2 border-white  transform group-hover:scale-110 transition-transform duration-300 z-50 " />
          )}
        </div>

        {/* Username tooltip */}
        {hasStories && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {username}
          </div>
        )}
      </div>

      <StoryViewer
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        profilePicture={profilePicture}
        username={username}
      />
    </>
  );
};

export default StoryIndicator; 