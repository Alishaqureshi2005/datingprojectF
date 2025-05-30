import React from 'react';
import { useSelector } from 'react-redux';
import GroupsSidebar from './GroupsSidebar';
import SuggestedGroups from './GroupFeed';

const Groups = () => {
  // Access group data from Redux store
  const groupData = useSelector((state) => state.data.profileData.groupData);

  // Handle undefined state
  if (!groupData) {
    console.error("Group data is not available in the state.");
    return <div>Loading...</div>; // Show a loading indicator or a fallback UI
  }

  return (
    <div className="grid grid-cols-10 bg-gray-100">
      {/* Sidebar Section */}
      <aside className="col-span-1 hidden lg:block">
        <GroupsSidebar Groups={groupData.sidebarGroups || []} />
      </aside>

      <main className="pt-10 col-span-10 lg:col-span-9 xl:ml-0 lg:ml-12 p-4 grid grid-cols-12 h-screen">
        <div className="lg:block hidden md:col-span-2"></div>
        <div className="col-span-12 lg:col-span-10">
          <SuggestedGroups groups={groupData.suggestedGroups || []} />
        </div>
      </main>
    </div>
  );
};

export default Groups;

