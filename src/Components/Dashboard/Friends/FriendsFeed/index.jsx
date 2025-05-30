import React from "react";


const FriendsFeed = ({friends}) => {
  // Example data for friends with formal names
  
  return (
    <div className=" flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {friends.map((friend,index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg w-full p-4 flex flex-col items-center"
          >
            <img
              src={friend.image}
              alt={`Avatar of ${friend.name}`}
              className="rounded-full mb-4 min-w-40 max-w-48 min-h-40"
            />
            <p className="text-gray-700 text-lg mb-2">{friend.name}</p>
            {!friend.active ? (
              <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded-full mb-2 w-full">
                Add friend
              </button>
            ) : (
              <button className="bg-gray-700 text-white py-1 px-4 rounded-full mb-2 w-full">
                Unfriend
              </button>
            )}
            <button className="bg-gray-300 text-gray-700 py-1 px-4 rounded-full w-full">
              Remove friend
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsFeed;
