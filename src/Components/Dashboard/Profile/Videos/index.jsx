import React from 'react';
import { FaPlay, FaClock, FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

const Videos = () => {
  // Sample data - replace with actual data from your backend
  const videos = [
    { 
      id: 1,
      title: 'Amazing Mountain Adventure',
      views: '12K',
      duration: '4:20',
      thumbnail: 'https://example.com/thumb1.jpg',
      user: {
        name: 'Travel Lover',
        avatar: 'https://example.com/avatar1.jpg'
      },
      likes: '1.2K',
      comments: 45,
      timestamp: '2 days ago'
    },
    { 
      id: 2,
      title: 'Cooking Masterclass',
      views: '8.5K',
      duration: '12:30',
      thumbnail: 'https://example.com/thumb2.jpg',
      user: {
        name: 'Chef Marie',
        avatar: 'https://example.com/avatar2.jpg'
      },
      likes: '890',
      comments: 32,
      timestamp: '1 week ago'
    },
    // Add more videos...
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gray-200 rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center">
              <FaPlay className="mr-2 text-blue-600" /> Videos
            </h1>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Upload Video
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b">
            <button className="px-4 py-2 border-b-2 border-blue-600 text-blue-600">All Videos</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">Suggested</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">My Uploads</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* Video Feed */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {videos.map(video => (
                <div key={video.id} className="bg-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover cursor-pointer"
                    />
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-sm">
                      <FaClock className="inline mr-1" /> {video.duration}
                    </div>
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-sm">
                      {video.views} views
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{video.title}</h3>
                    <div className="flex items-center mb-2">
                      <img
                        src={video.user.avatar}
                        alt={video.user.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-gray-600">{video.user.name}</span>
                    </div>
                    <div className="flex justify-between text-gray-500 text-sm">
                      <span>{video.timestamp}</span>
                      <div className="flex gap-4">
                        <span className="flex items-center">
                          <FaThumbsUp className="mr-1" /> {video.likes}
                        </span>
                        <span className="flex items-center">
                          <FaComment className="mr-1" /> {video.comments}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md">
                        <FaThumbsUp /> Like
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md">
                        <FaComment /> Comment
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md">
                        <FaShare /> Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Videos Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-200 rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-4">Suggested Videos</h2>
              <div className="space-y-4">
                {videos.slice(0, 3).map(video => (
                  <div key={video.id} className="cursor-pointer group">
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute bottom-1 left-1 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-xs">
                        {video.duration}
                      </div>
                    </div>
                    <h4 className="text-sm font-medium mt-1 group-hover:text-blue-600">
                      {video.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {video.user.name} · {video.views} views
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;