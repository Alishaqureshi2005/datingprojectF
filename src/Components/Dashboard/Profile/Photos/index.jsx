import React from 'react';
import { FaCamera, FaPlus, FaEllipsisH } from 'react-icons/fa';

const Photos = () => {
  // Sample data - replace with actual data from your backend
  const albums = [
    { id: 1, title: 'Travel Memories', count: 24, cover: 'https://example.com/cover1.jpg', date: '2024-03-15' },
    { id: 2, title: 'Family Gatherings', count: 18, cover: 'https://example.com/cover2.jpg', date: '2024-02-20' },
    { id: 3, title: 'Friends Party', count: 32, cover: 'https://example.com/cover3.jpg', date: '2024-01-10' },
  ];

  const photos = [
    { id: 1, url: 'https://example.com/photo1.jpg', likes: 42, comments: 8 },
    { id: 2, url: 'https://example.com/photo2.jpg', likes: 35, comments: 5 },
    { id: 3, url: 'https://example.com/photo3.jpg', likes: 28, comments: 3 },
    // Add more photos...
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gray-200 rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center">
              <FaCamera className="mr-2 text-blue-600" /> Photos
            </h1>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                <FaPlus className="mr-2" /> Create Album
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                Upload Photos
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b">
            <button className="px-4 py-2 border-b-2 border-blue-600 text-blue-600">Your Photos</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">Albums</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100">Tagged</button>
          </div>
        </div>

        {/* Albums Section */}
        <div className="bg-gray-200 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Albums ({albums.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {albums.map(album => (
              <div key={album.id} className="relative group cursor-pointer">
                <img 
                  src={album.cover} 
                  alt={album.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg p-4 flex flex-col justify-end group-hover:bg-opacity-60 transition-all">
                  <h3 className="text-white font-semibold">{album.title}</h3>
                  <p className="text-gray-200 text-sm">
                    {album.count} photos · {album.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photos Grid */}
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">All Photos ({photos.length})</h2>
            <button className="text-gray-600 hover:text-gray-800">
              <FaEllipsisH />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {photos.map(photo => (
              <div key={photo.id} className="relative group">
                <img
                  src={photo.url}
                  alt={`Photo ${photo.id}`}
                  className="w-full h-32 object-cover rounded-lg cursor-pointer transform transition-all hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center space-x-2">
                  <button className="opacity-0 group-hover:opacity-100 text-white bg-gray-800 bg-opacity-70 px-3 py-1 rounded-md text-sm">
                    {photo.likes} Likes
                  </button>
                  <button className="opacity-0 group-hover:opacity-100 text-white bg-gray-800 bg-opacity-70 px-3 py-1 rounded-md text-sm">
                    {photo.comments} Comments
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tagged Photos Section */}
        <div className="bg-gray-200 rounded-lg shadow-md p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Photos of You (12)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Similar structure to photos grid */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;