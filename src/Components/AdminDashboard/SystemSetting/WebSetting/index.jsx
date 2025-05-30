import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';

const WebSetting = () => {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState({});

  useEffect(() => {
    // Simulate fetching web settings
    const timer = setTimeout(() => {
      setSettings({
        siteName: 'My Website',
        maintenanceMode: false,
        analyticsEnabled: true
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
      <h2 className="text-xl font-semibold mb-4">Web Settings</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Site Name</h3>
          <p className="text-gray-700">{settings.siteName}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Maintenance Mode</h3>
          <p className="text-gray-700">{settings.maintenanceMode ? 'Enabled' : 'Disabled'}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Analytics</h3>
          <p className="text-gray-700">{settings.analyticsEnabled ? 'Enabled' : 'Disabled'}</p>
        </div>
      </div>
    </div>
  );
};

export default WebSetting;
