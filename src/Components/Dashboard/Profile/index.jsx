import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ContextApi } from "../../../helper/ContextApi";
import Dp from "../../../assets/Images/profile_png/dp.png";
import Header from "./Header";
import Navbar from "./Navbar";
import Posts from "./Posts";
import About from "./About";
import Videos from "./Videos";
import Reels from "./Reels";
import Friends from "./Friends";
import Photos from "./Photos";

const ProfilePage = () => {
  const { profileData, error } = useContext(ContextApi);

  // Default profile data
  const defaultProfileData = {
    userName: "Default User",
    profilePicture: Dp,
    friends: [],
    posts: [],
  };

  // Merge profile data with default values
  const finalProfileData = {
    userName: profileData?.user?.firstName + " " + profileData?.user?.surname || defaultProfileData.userName,
    profilePicture: profileData?.profilePic || defaultProfileData.profilePicture,
    friends: profileData?.friends || defaultProfileData.friends,
    posts: profileData?.posts || defaultProfileData.posts,
    userId: profileData?.user?.id,
    gender: profileData?.user?.gender,
    dateOfBirth: profileData?.user?.dateOfBirth,
  };

  console.log("Final Profile Data:", finalProfileData);

  // Header data
  const HeaderData = {
    userName: finalProfileData.userName,
    totalFriends: profileData?.friendsCount || 0,
    profilePicture: finalProfileData.profilePicture,
    friends: finalProfileData.friends.map((friend) => friend.image),
    userId:finalProfileData.userId,
    gender: finalProfileData.gender,
    dateOfBirth: finalProfileData.dateOfBirth,
    firstName: profileData?.user?.firstName,
    surname: profileData?.user?.surname,
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="lg:px-48 md:pt-4">
      {/* Header Component */}
      <Header HeaderData={HeaderData} />

      {/* Navbar Component */}
      <Navbar />

      {/* Child Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <Posts
              userDetails={{
                userName: finalProfileData.userName,
                profilePicture: finalProfileData.profilePicture,
              }}
              repeatedFriends={finalProfileData.friends}
              mediaData={finalProfileData.posts}
            />
          }
        />
        <Route path="/about" element={<About info={profileData} />} />
        <Route path="/friend" element={<Friends />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </div>
  );
};

export default ProfilePage;
