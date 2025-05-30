import React from 'react';
import { useSelector } from 'react-redux';
import FriendsSidebar from './FriendsSidebar';
import Searchbar from './Seachbar';
import FriendsNavbar from './FriendsNavbar';
import FriendsFeed from './FriendsFeed';

const Friends = () => {
  const userDatails = useSelector((state) => ({
    userName: state.data.profileData.userName,
    Dp: state.data.profileData.profilePicture,
  }));

  // Access friends data from Redux store
  const friends = useSelector((state) => state.data.profileData.friends) || [];

  return (
    <div className='grid grid-cols-6 md:pt-0'>
      <div className='hidden md:block col-span-2'>
        <FriendsSidebar userDatails={userDatails} />
      </div>
      <div className="grid grid-cols-6 gap-4 col-span-6 md:col-span-4 mx-1 sm:mx-4">
        <div className="col-span-6 xl:col-span-5 flex flex-col gap-4 p-4 mt-4">
          <Searchbar />
          <FriendsNavbar />
          <FriendsFeed friends={friends} />
        </div>
      </div>
    </div>
  );
};

export default Friends;
