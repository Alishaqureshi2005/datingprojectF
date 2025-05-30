import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';

const View = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user data
    const timer = setTimeout(() => {
      setUser({
        username: 'JohnDoe',
        role: 'Admin',
        joined: '2023-01-01',
        email: 'john.doe@example.com',
        status: 'Active'
      });
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">View User</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <p className="mt-1 text-gray-900">{user.username}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <p className="mt-1 text-gray-900">{user.role}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Joined</label>
          <p className="mt-1 text-gray-900">{user.joined}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <p className="mt-1 text-gray-900">{user.email}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <p className="mt-1 text-gray-900">{user.status}</p>
        </div>
      </div>
    </div>
  );
};

export default View;
