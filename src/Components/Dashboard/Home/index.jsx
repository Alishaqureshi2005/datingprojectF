import React, { useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostForm from '../Common/PostForm';
import PostGrid from '../Common/PostGrid';
import ImageLayout from '../Common/ImageLayout';
import SidebarMenu from './SidebarMenu';
import { ContextApi } from '../../../helper/ContextApi';
import { getAllPostsFeed } from "../../../utils/Apis";

const Home = () => {
  const { profileData } = useContext(ContextApi);
  // Access media and user data from Redux store
  const mediaData = useSelector((state) => state.data.profileData.posts) || [];
  const userDetails = useSelector((state) => ({
    userName: state.data.profileData.userName,
    Dp: state.data.profilePicture,
  }));

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem('token');
      // console.log('Token:', token); // Verify token exists
      
      const data = await getAllPostsFeed(token);
      console.log("Raw API Response:", data);
      const mappedPosts = data.map(post => ({
        Dp: post?.userProfile.profilePic , // or wherever the avatar is
        userName: post?.user.firstName + ' ' + post.user.surname,
        type: post?.image ? "image" : "text", // or "video" if you support videos
        src: post?.image || post?.video || "",
        visitorImg: profileData?.profilePic, // set this from your logged-in user
        comments: Array.isArray(post.comments) ? post.comments : [],
      }));
      setPosts(mappedPosts);
    };
    fetchPosts();
  }, []);

  return (
    <div className='grid grid-cols-6 md:pt-0'>
      <div className='hidden md:block col-span-2 '>
        <SidebarMenu userDetails={profileData} />
      </div>
      <div className="grid grid-cols-6 gap-4 col-span-6 md:col-span-4 mx-1 sm:mx-4">
        <div className="col-span-6 xl:col-span-5 flex flex-col gap-4 p-4 mt-4">
          <PostForm userDetails={profileData} />
          <PostGrid />
          {posts.map((data, index) => (
            <ImageLayout key={index} mediaData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
