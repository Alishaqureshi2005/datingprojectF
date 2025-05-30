import React, { useState, useEffect, useRef } from 'react';
import { getStories, viewStory } from '../../../../utils/Apis';
import { toast } from 'react-toastify';

const StoryViewer = ({profilePicture, username, isOpen, onClose, initialStoryIndex = 0 }) => {
  const [stories, setStories] = useState([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(initialStoryIndex);
  const [isLoading, setIsLoading] = useState(true);
  const progressRef = useRef(null);
  const timerRef = useRef(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (isOpen) {
      fetchStories();
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isOpen]);

  const fetchStories = async () => {
    try {
      setIsLoading(true);
      const response = await getStories(token);
      console.log(response);
      setStories(response);
      if (response.length > 0) {
        startStoryTimer();
        markStoryAsViewed(response[initialStoryIndex]._id);
      }
    } catch (error) {
      console.error('Error fetching stories:', error);
      toast.error('Failed to load stories');
    } finally {
      setIsLoading(false);
    }
  };

  const startStoryTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (progressRef.current) {
      progressRef.current.style.width = '0%';
    }

    const duration = 5000;
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed / duration) * 100;

      if (progressRef.current) {
        progressRef.current.style.width = `${Math.min(progress, 100)}%`;
      }

      if (progress < 100) {
        timerRef.current = requestAnimationFrame(updateProgress);
      } else {
        handleNextStory();
      }
    };

    timerRef.current = requestAnimationFrame(updateProgress);
  };

  const handleNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
      markStoryAsViewed(stories[currentStoryIndex + 1]._id);
      startStoryTimer();
    } else {
      onClose();
    }
  };

  const handlePreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
      markStoryAsViewed(stories[currentStoryIndex - 1]._id);
      startStoryTimer();
    }
  };

  const markStoryAsViewed = async (storyId) => {
    try {
      await viewStory(storyId, token);
    } catch (error) {
      console.error('Error marking story as viewed:', error);
    }
  };

  if (!isOpen) return null;

  const currentStory = stories[currentStoryIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="relative w-full max-w-lg h-[85vh] bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl">
        {/* Progress bars */}
        <div className="absolute top-0 left-0 right-0 flex gap-1 p-4 z-10">
          {stories.map((_, index) => (
            <div key={index} className="h-1 flex-1 bg-gray-700 rounded-full overflow-hidden">
              <div
                ref={index === currentStoryIndex ? progressRef : null}
                className={`h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-100 ${
                  index < currentStoryIndex ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Story content */}
        <div className="relative h-full">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
            </div>
          ) : currentStory ? (
            <>
              {/* User info */}
              <div className="absolute top-6 left-6 z-10 flex items-center bg-black bg-opacity-50 px-4 py-2 rounded-full backdrop-blur-sm">
                <img
                  src={profilePicture}
                  alt={username}
                  className="w-10 h-10 rounded-full border-2 border-pink-500"
                />
                <span className="ml-3 text-white font-semibold">
                  {currentStory.user.username}
                </span>
                <span className="ml-2 text-gray-400 text-sm">
                  {new Date(currentStory.createdAt).toLocaleTimeString()}
                </span>
              </div>

              {/* Story media */}
              <div className="h-full flex items-center justify-center bg-black">
                {currentStory.mediaType === 'image' ? (
                  <img
                    src={currentStory.mediaUrl}
                    alt="Story"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <video
                    src={currentStory.mediaUrl}
                    controls
                    className="max-h-full max-w-full"
                    autoPlay
                  />
                )}
              </div>

              {/* Caption */}
              {currentStory.caption && (
                <div className="absolute bottom-6 left-6 right-6 bg-black bg-opacity-50 text-white p-4 rounded-xl backdrop-blur-sm">
                  {currentStory.caption}
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-white">
              No stories available
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer"
          onClick={handlePreviousStory}
        />
        <button
          className="absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer"
          onClick={handleNextStory}
        />

        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-white z-10 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
          onClick={onClose}
        >
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default StoryViewer; 