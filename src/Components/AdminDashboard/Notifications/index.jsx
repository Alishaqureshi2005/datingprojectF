import React, { useState, useEffect } from 'react';
import Loading from '../Loading';

const Notifications = () => {
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate fetching notifications
    const timer = setTimeout(() => {
      setNotifications([
        { id: 1, message: 'New user registered', timestamp: '2 hours ago' },
        { id: 2, message: 'System update available', timestamp: '1 day ago' },
        { id: 3, message: 'New report generated', timestamp: '3 days ago' }
      ]);
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <div className="space-y-4">
        {notifications.map(notification => (
          <div key={notification.id} className="p-4 bg-white rounded-lg shadow">
            <p className="text-gray-800">{notification.message}</p>
            <p className="text-sm text-gray-500">{notification.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
