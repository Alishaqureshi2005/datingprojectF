import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';

const InAppropriateContent = () => {
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Simulate fetching inappropriate content reports
    const timer = setTimeout(() => {
      setReports([
        { id: 1, content: 'Inappropriate post by user123', reason: 'Violence' },
        { id: 2, content: 'Spam content by user456', reason: 'Spam' },
        { id: 3, content: 'Hate speech by user789', reason: 'Hate Speech' }
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
      <h2 className="text-xl font-semibold mb-4">Inappropriate Content Reports</h2>
      <div className="space-y-4">
        {reports.map(report => (
          <div key={report.id} className="p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-medium">{report.content}</h3>
            <p className="text-gray-700">Reason: {report.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InAppropriateContent;
