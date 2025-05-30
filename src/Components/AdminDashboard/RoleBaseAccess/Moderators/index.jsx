import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';

const Moderator = () => {
  const [loading, setLoading] = useState(true);
  const [moderators, setModerators] = useState([]);

  useEffect(() => {
    // Simulate fetching moderator data
    const timer = setTimeout(() => {
      setModerators([
        { id: 1, name: 'Moderator 1', status: 'Active' },
        { id: 2, name: 'Moderator 2', status: 'Inactive' },
        { id: 3, name: 'Moderator 3', status: 'Active' }
      ]);
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Moderators</h2>
      <div className="space-y-4">
        {moderators.map(moderator => (
          <div key={moderator.id} className="p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-medium">{moderator.name}</h3>
            <p className="text-gray-700">Status: {moderator.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moderator;
