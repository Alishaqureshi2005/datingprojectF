import React, { useState, useRef } from "react";
import { FaTimes, FaImage, FaVideo, FaSmile, FaMapMarkerAlt, FaTag, FaUserFriends, FaGlobe } from 'react-icons/fa';
import { createPost } from "../../../../utils/Apis";
import { toast } from "react-toastify";

const PostModal = ({ userDetails, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [privacy, setPrivacy] = useState("public");
  const fileInputRef = useRef(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setPostContent("");
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size should be less than 10MB");
        return;
      }
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!postContent.trim() && !selectedFile) {
      toast.error("Please add some content or media to your post");
      return;
    }

    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("content", postContent);
      if (selectedFile) {
        formData.append("media", selectedFile);
      }
      formData.append("privacy", privacy);

      await createPost(formData);
      toast.success("Post created successfully!");
      closeModal();
    } catch (error) {
      toast.error(error.message || "Failed to create post");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <div onClick={openModal}>
        {children}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl">
            {/* Header */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">Create Post</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* User Info */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img
                  src={userDetails?.profilePic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{userDetails?.name}</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPrivacy(privacy === "public" ? "friends" : "public")}
                      className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {privacy === "public" ? (
                        <>
                          <FaGlobe className="w-4 h-4" />
                          <span>Public</span>
                        </>
                      ) : (
                        <>
                          <FaUserFriends className="w-4 h-4" />
                          <span>Friends</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <form onSubmit={handleSubmit} className="p-4">
              <div className="mb-4">
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="What's on your mind?"
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows="4"
                />
              </div>

              {/* Preview Section */}
              {previewUrl && (
                <div className="mb-4 relative">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full max-h-96 object-contain rounded-xl"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedFile(null);
                      setPreviewUrl(null);
                    }}
                    className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <FaTimes className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl mb-4">
                <span className="text-gray-700 font-medium">Add to your post</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
                  >
                    <FaImage className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <FaVideo className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-full transition-colors"
                  >
                    <FaSmile className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                  >
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    className="p-2 text-purple-600 hover:bg-purple-50 rounded-full transition-colors"
                  >
                    <FaTag className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isUploading || (!postContent.trim() && !selectedFile)}
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUploading ? "Posting..." : "Post"}
              </button>
            </form>

            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*,video/*"
              className="hidden"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PostModal;