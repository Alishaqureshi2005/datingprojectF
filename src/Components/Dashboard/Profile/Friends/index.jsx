import React from 'react';
import { FaUserPlus, FaBirthdayCake, FaSearch, FaComment, FaUserCheck } from 'react-icons/fa';

const Friends = () => {
  // Sample data - replace with actual data from your backend
  const friends = [
    { id: 1, name: 'John Doe', mutualFriends: 12, isOnline: true, profilePic: 'https://example.com/1.jpg' },
    { id: 2, name: 'Jane Smith', mutualFriends: 8, isOnline: false, profilePic: 'https://example.com/2.jpg' },
    { id: 3, name: 'Mike Johnson', mutualFriends: 15, isOnline: true, profilePic: 'https://example.com/3.jpg' },
  ];

  const friendRequests = [
    { id: 4, name: 'Sarah Wilson', mutualFriends: 5, profilePic: 'https://example.com/4.jpg' },
    { id: 5, name: 'Robert Brown', mutualFriends: 3, profilePic: 'https://example.com/5.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gray-200 rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
            <FaUserPlus className="mr-2 text-blue-600" /> Friends
          </h1>
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search friends..."
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-gray-200 rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-3">Filters</h2>
              <ul className="space-y-2">
                <li className="flex items-center text-blue-600 cursor-pointer hover:bg-gray-100 p-2 rounded">
                  <FaUserCheck className="mr-2" /> All Friends
                </li>
                <li className="flex items-center text-gray-600 cursor-pointer hover:bg-gray-100 p-2 rounded">
                  <FaUserPlus className="mr-2" /> Friend Requests
                </li>
                <li className="flex items-center text-gray-600 cursor-pointer hover:bg-gray-100 p-2 rounded">
                  <FaBirthdayCake className="mr-2" /> Birthdays
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Friend Requests */}
            <div className="bg-gray-200 rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Friend Requests ({friendRequests.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {friendRequests.map(request => (
                  <div key={request.id} className="flex items-center p-4 border rounded-lg hover:bg-gray-100">
                    <img 
                      src={request.profilePic} 
                      alt={request.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{request.name}</h3>
                      <p className="text-sm text-gray-500">{request.mutualFriends} mutual friends</p>
                      <div className="flex gap-2 mt-2">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                          Confirm
                        </button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Friends List */}
            <div className="bg-gray-200 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">All Friends ({friends.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {friends.map(friend => (
                  <div key={friend.id} className="p-4 border rounded-lg hover:bg-gray-100">
                    <div className="relative">
                      <img 
                        src={friend.profilePic} 
                        alt={friend.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      {friend.isOnline && (
                        <div className="absolute bottom-2 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <h3 className="font-semibold">{friend.name}</h3>
                    <p className="text-sm text-gray-500">{friend.mutualFriends} mutual friends</p>
                    <button className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                      <FaComment /> Message
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                See More Friends
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;