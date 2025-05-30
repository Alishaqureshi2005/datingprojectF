import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';

const UserBehavior = () => {
  const [loading, setLoading] = useState(true);
  const [behaviorData, setBehaviorData] = useState([]);

  useEffect(() => {
    // Simulate fetching user behavior data
    const timer = setTimeout(() => {
      setBehaviorData([
        { id: 1, metric: 'Average Session Duration', value: '5m 30s' },
        { id: 2, metric: 'Pages per Session', value: 4.5 },
        { id: 3, metric: 'Returning Users', value: '65%' }
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
      <h2 className="text-xl font-semibold mb-4">User Behavior</h2>
      <div className="space-y-4">
        {behaviorData.map(data => (
          <div key={data.id} className="p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-medium">{data.metric}</h3>
            <p className="text-gray-700">{data.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBehavior;
