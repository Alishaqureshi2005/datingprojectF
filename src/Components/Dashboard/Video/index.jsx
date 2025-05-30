import React from 'react';
// import VideoMenu from './VideoMenu';
// import ImageLayout from '../Common/ImageLayout';
// import VideoHeader from './VideoHeader';
// import V1 from "../../../assets/Images/Videos/v1.mp4"
// import V2 from "../../../assets/Images/Videos/v2.mp4"
// import V3 from "../../../assets/Images/Videos/v3.mp4"
// import V4 from "../../../assets/Images/Videos/v4.mp4"

const Video = () => {
  // const PostImg1 = {
  //   type: "video", // or "video"
  //   src: V2, // URL to the media
  // };
  // const PostImg2 = {
  //   type: "video", // or "video"
  //   src: V1, // URL to the media
  // };
  // const PostImg3 = {
  //   type: "video", // or "video"
  //   src: V3, // URL to the media
  // };
  // const PostImg4 = {
  //   type: "video", // or "video"
  //   src: V4, // URL to the media
  // };
  
  return (
    // <div className='grid grid-cols-6 mt-5 md:pt-0 bg-gray-200'>
    //   <div className='hidden md:block col-span-2 '>
    //     <VideoMenu />
    //   </div>
    //   <div className="grid grid-cols-6 gap-4 col-span-6 md:col-span-4 mx-4">
    //     <div className="col-span-6  xl:col-span-4">
    //       <VideoHeader />
    //       <ImageLayout PostImg={PostImg1} />
    //       <ImageLayout PostImg={PostImg2} />
    //       <ImageLayout PostImg={PostImg3} />
    //       <ImageLayout PostImg={PostImg4} />
    //     </div>
    //     {/* Sidebar for Larger Screens */}
    //     <div className="hidden xl:block  xl:col-span-2"></div>
    //   </div>
    // </div>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 text-white">
      <div className="text-center p-12 bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg max-w-xl w-full">
        <h1 className="text-4xl font-semibold mb-6 text-gray-100">Under Construction</h1>
        <p className="text-lg font-light mb-6 text-gray-300">
          We're currently building something amazing. Stay tuned for updates!
        </p>
        <div className="mt-8">
          <svg
            className="w-20 h-20 text-gray-200 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M14 2a10 10 0 0 1 0 20" />
          </svg>
        </div>
        <p className="mt-8 text-sm text-gray-400">
          Thank you for your patience. We are excited to share it with you soon.
        </p>
      </div>
    </div>
  );
};

export default Video;
