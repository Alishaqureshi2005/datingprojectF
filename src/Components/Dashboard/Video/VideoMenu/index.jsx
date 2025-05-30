import React from 'react';

const VideoMenu = () => {
  return (
    <div className="p-4 sticky top-20">
      <div className="text-purple-800">
        <h1 className="font-bold mb-4">Video</h1>
        <div className="mb-4">
          <input
            type="text"
            className="w-3/4 p-2 rounded-full bg-gray-100 px-4"
            placeholder="Search videos"
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://storage.googleapis.com/a1aa/image/IAUMIabauHZQE1OsJgWyeg0Sehe0jdv1wBYgCc6FQ2tqRuGoA.jpg"
              alt="Home icon"
              className="w-6 h-6"
            />
            <span className="text-lg">Home</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://storage.googleapis.com/a1aa/image/i6fAlwjoVbXGYa5GUd6P7fooGjtQDHckBk33jk2GPDL3IXDUA.jpg"
              alt="Live icon"
              className="w-6 h-6"
            />
            <span className="text-lg">Live</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://storage.googleapis.com/a1aa/image/RJ8UNcUERZ4BBBJNa6hjGz7NKIyStS4zaFlzcVNOffe9RuGoA.jpg"
              alt="Reels icon"
              className="w-6 h-6"
            />
            <span className="text-lg">Reels</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://storage.googleapis.com/a1aa/image/THftHA4aiD2jaCuXtWrGvCtOgNH3UqPa4G69Sb5tLJ5ckrBKA.jpg"
              alt="Shows icon"
              className="w-6 h-6"
            />
            <span className="text-lg">Shows</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://storage.googleapis.com/a1aa/image/927PQdkPHD6sP1OM8jsZjpCJQpsdfRQKyb3omzbxonceIXDUA.jpg"
              alt="Explore icon"
              className="w-6 h-6"
            />
            <span className="text-lg">Explore</span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://storage.googleapis.com/a1aa/image/TpFe7CvOElTwM6ei5uxJIH06WOrHSLqTxHnj3yxAbb46IXDUA.jpg"
              alt="Saved videos icon"
              className="w-6 h-6"
            />
            <span className="text-lg">Saved videos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMenu;
