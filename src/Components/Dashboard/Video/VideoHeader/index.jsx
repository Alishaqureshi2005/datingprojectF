import React from "react";
import C1 from "../../../../assets/Images/profile_png/c1.png";
import C2 from "../../../../assets/Images/profile_png/c2.png";
const VideoHeader = () => {
  return (
    // <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="bg-gray-200 p-6 mb-4 rounded-lg w-full">
        <h2 className="text-blue-600 text-center sm:text-left text-xl font-bold mb-4">
          New videos for you•2
        </h2>
        <div className="flex space-x-4">
          <div className="bg-gray-300 p-4 rounded-lg flex flex-col sm:flex-row items-center space-x-4 w-1/2">
            <img
              alt="Avatar of a woman"
              className="rounded-full w-12 h-12"
              src={C1}
            />
            <div>
              <h3 className="text-blue-600 font-semibold">New videos</h3>
              <p className="text-gray-500 text-sm">6 minute ago</p>
            </div>
          </div>
          <div className="bg-gray-300 px-4 rounded-lg flex flex-col sm:flex-row justify-center sm:justify-start items-center space-x-4 w-1/2">
            <img
              alt="Avatar of a man"
              className="rounded-full w-12 h-12"
              src={C2}

            />
            <div>
              <h3 className="text-blue-600 font-semibold">New videos</h3>
              <p className="text-gray-500 text-sm">6 minute ago</p>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default VideoHeader;
