import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';

const ThemeCustomization = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('Light');

  useEffect(() => {
    // Simulate fetching theme settings
    const timer = setTimeout(() => {
      setTheme('Dark'); // Simulate fetching a theme setting
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Theme Customization</h2>
      <p className="text-gray-700">Current Theme: {theme}</p>
      {/* Additional customization options can be added here */}
    </div>
  );
};

export default ThemeCustomization;
