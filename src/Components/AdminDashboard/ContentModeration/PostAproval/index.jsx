import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';

const PostApproval = () => {
  const [loading, setLoading] = useState(true);
  const [approvalRequests, setApprovalRequests] = useState([]);

  useEffect(() => {
    // Simulate fetching post approval requests
    const timer = setTimeout(() => {
      setApprovalRequests([
        { id: 1, title: 'Post 1', status: 'Pending' },
        { id: 2, title: 'Post 2', status: 'Pending' },
        { id: 3, title: 'Post 3', status: 'Pending' }
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
      <h2 className="text-xl font-semibold mb-4">Post Approval Requests</h2>
      <div className="space-y-4">
        {approvalRequests.map(request => (
          <div key={request.id} className="p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-medium">{request.title}</h3>
            <p className="text-gray-700">Status: {request.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostApproval;
