import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import PostForm from "../../Common/PostForm";
import PostGrid from "../../Common/PostGrid";
import ImageLayout from "../../Common/ImageLayout";
import { getMyPosts, getProfile} from "../../../../utils/Apis";

const Posts = ({ repeatedFriends, userDetails }) => {
  const [mediaData, setMediaData] = useState([]); // State to store posts
  const [isLoading, setIsLoading] = useState(false); // State to handle loading
  const [userProfile, setUserProfile] = useState(null);
  const token = localStorage.getItem("token");

  const fetchProfile = async () => {
    const data = await getProfile(token);
    setUserProfile(data);
    console.log("Fetched Profile Data:", data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  useEffect(() => {
    const fetchMyPosts = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        const posts = await getMyPosts(token);
        console.log("Fetched My Posts:", posts);
        setMediaData(posts); // Set the fetched posts
      } catch (error) {
        console.error("Error fetching my posts:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyPosts();
  }, []);
  // const likeHandler=async(postId)=>{
  //   const res=await likePost(postId,token);
  //   console.log("Like Response:",res);
  // }
  // const commentHandler=async(postId,comment)=>{
  //   const res=await addComment(postId,comment,token);
  //   console.log("add Comment:",res);
  // }
  return (
    <div className="bg-gray-100 font-sans">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-5 sm:gap-4 items-start">
          {/* Sidebar */}
          <Sidebar
            repeatedFriends={repeatedFriends}
            userProfile={userProfile}
            token={token}
            onProfileUpdate={fetchProfile}
          />

          {/* Main Content */}
          <div className="col-span-3">
            {/* Post Form */}
            <PostForm userDetails={userProfile} />

            {/* Posts Grid */}
            {isLoading ? (
              <p>Loading your posts...</p>
            ) : (
              mediaData.map((post) => (
                <ImageLayout
                  key={post._id}
                  mediaData={{
                    Dp: post?.userProfile?.profilePic,
                    userName: `${post.user?.firstName || "Unknown"} ${
                      post.user?.surname || "User"
                    }`,
                    content: post.content || "No content available",
                    image: post.image || null,
                    likes: post.likes || [],
                    comments: post.comments || [],
                    postId:post._id,
                    userId: userProfile?.user?._id,
                  }}
                  // like={likeHandler}
                  // comment={commentHandler}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
