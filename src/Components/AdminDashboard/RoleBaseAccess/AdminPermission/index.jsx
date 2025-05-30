import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';

const AdminPermission = () => {
  const [loading, setLoading] = useState(true);
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    // Simulate fetching admin permissions
    const timer = setTimeout(() => {
      setPermissions([
        { id: 1, permission: 'Manage Users', status: 'Granted' },
        { id: 2, permission: 'Edit Content', status: 'Granted' },
        { id: 3, permission: 'View Analytics', status: 'Denied' }
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
      <h2 className="text-xl font-semibold mb-4">Admin Permissions</h2>
      <div className="space-y-4">
        {permissions.map(permission => (
          <div key={permission.id} className="p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-medium">{permission.permission}</h3>
            <p className="text-gray-700">Status: {permission.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPermission;
