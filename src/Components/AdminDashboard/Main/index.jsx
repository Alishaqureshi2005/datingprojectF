import React, { useState, useEffect } from 'react';
import Loading from '../Loading';

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-[92vh] flex items-center justify-center  overflow-auto">
      <div className="w-[90%] md:w-3/4 lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">Admin Dashboard</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">
          Welcome to the Admin Dashboard. Here you can manage users, view analytics, and moderate content.
        </p>
        <div className="flex justify-around">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Manage Users
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
