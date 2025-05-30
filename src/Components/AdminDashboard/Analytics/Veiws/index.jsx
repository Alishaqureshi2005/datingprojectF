import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';

const Veiws = () => {
  const [loading, setLoading] = useState(true);
  const [viewsData, setViewsData] = useState([]);

  useEffect(() => {
    // Simulate fetching views data
    const timer = setTimeout(() => {
      setViewsData([
        { id: 1, metric: 'Page Views', value: 1500 },
        { id: 2, metric: 'Unique Visitors', value: 800 },
        { id: 3, metric: 'Bounce Rate', value: '30%' }
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
      <h2 className="text-xl font-semibold mb-4">View Statistics</h2>
      <div className="space-y-4">
        {viewsData.map(data => (
          <div key={data.id} className="p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-medium">{data.metric}</h3>
            <p className="text-gray-700">{data.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Veiws;
