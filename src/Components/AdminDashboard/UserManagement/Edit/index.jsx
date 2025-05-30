import React, { useState } from 'react';
import Loading from '../../Loading';

const Edit = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('user');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate a data submission
    const timer = setTimeout(() => {
      alert(`User ${username} has been updated to ${role} role.`);
      setLoading(false);
      setUsername('');
      setRole('user');
    }, 2000); // Simulate a 2-second submission time

    return () => clearTimeout(timer); // Cleanup on unmount
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Edit User</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter username"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">New Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
            <option value="user">User</option>
          </select>
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Edit;
