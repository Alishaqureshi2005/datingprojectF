import React, { useRef, useState, useEffect } from "react";
import { FaCamera, FaDownload, FaEdit, FaPlus, FaTimes, FaUserFriends, FaEllipsisH } from 'react-icons/fa';
import { uploadProfilePic, createStory, getUserStories, editUser} from "../../../../utils/Apis";
import { toast } from "react-toastify";
import StoryIndicator from "../../Common/StoryIndicator";

const Header = ({ HeaderData }) => {
  const fileInputRef = useRef(null);
  const storyInputRef = useRef(null);
  const bannerInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [storyCaption, setStoryCaption] = useState('');
  const [storyPreview, setStoryPreview] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    firstName: '',
    surname: '',
    gender: '',
    dateOfBirth: ''
  });
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (HeaderData) {
      setEditForm({
        firstName: HeaderData.firstName || '',
        surname: HeaderData.surname || '',
        gender: HeaderData.gender || '',
        dateOfBirth: HeaderData.dateOfBirth || ''
      });
    }
  }, [HeaderData, showEditModal]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size should be less than 5MB');
      return;
    }

    const formData = new FormData();
    formData.append('profilePic', file);

    try {
      setIsUploading(true);
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Please login again');
        return;
      }

      await uploadProfilePic(formData, token);
      toast.success('Profile picture updated successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      toast.error(error.message || 'Failed to upload profile picture');
    } finally {
      setIsUploading(false);
    }
  };

  const handleStoryFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
      toast.error('Please upload an image or video file');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error('File size should be less than 10MB');
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    setStoryPreview({ file, previewUrl });
    setShowStoryModal(true);
  };

  const handleStorySubmit = async () => {
    if (!storyPreview) return;

    try {
      setIsUploading(true);
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Please login again');
        return;
      }

      const formData = new FormData();
      formData.append('media', storyPreview.file);
      if (storyCaption) formData.append('caption', storyCaption);

      await createStory(formData, token);
      toast.success('Story created successfully!');
      
      setStoryPreview(null);
      setStoryCaption('');
      setShowStoryModal(false);
      window.location.reload();
    } catch (error) {
      console.error('Error creating story:', error);
      toast.error(error.message || 'Failed to create story');
    } finally {
      setIsUploading(false);
    }
  };

  const handleCameraClick = () => fileInputRef.current.click();
  const handleAddToStory = () => storyInputRef.current.click();

  const handleViewStories = async () => {
    if (!HeaderData?.userId) {
      toast.error('User ID is not available');
      return;
    }

    try {
      const stories = await getUserStories(HeaderData.userId, token);
      stories?.length > 0 ? setIsViewerOpen(true) : toast.info('No stories available');
    } catch (error) {
      console.error('Error checking stories:', error);
      toast.error(error.message || 'Failed to load stories');
    }
  };

  const handleEditProfile = async () => {
    try {
      setIsUploading(true);
      const formData = {
        ...editForm,
        dateOfBirth: editForm.dateOfBirth ? new Date(editForm.dateOfBirth).toISOString() : null
      };
      
      await editUser(formData, token);
      toast.success('Profile updated successfully!');
      setShowEditModal(false);
      window.location.reload();
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error(error.message || 'Failed to update profile');
    } finally {
      setIsUploading(false);
    }
  };

  const formatDateForInput = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const defaultAvatar = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 24 24' fill='none' stroke='%23cccccc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E";

  const handleBannerChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error('File size should be less than 10MB');
      return;
    }

    const formData = new FormData();
    formData.append('bannerPic', file);

    try {
      setIsUploading(true);
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Please login again');
        return;
      }

      // await uploadBannerPic(formData, token);
      toast.success('Banner updated successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error uploading banner:', error);
      toast.error(error.message || 'Failed to upload banner');
    } finally {
      setIsUploading(false);
    }
  };

  const handleBannerClick = () => bannerInputRef.current.click();

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Cover Photo Area */}
        <div className="h-48 relative group">
          <div  onClick={handleBannerClick}
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: HeaderData.bannerPicture 
                ? `url(${HeaderData.bannerPicture})` 
                : 'linear-gradient(to right, #3b82f6, #8b5cf6)'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
          
          <input
            type="file"
            ref={bannerInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleBannerChange}
            disabled={isUploading}
          />
        </div>

        {/* Main Content Section */}
        <div className="px-4 sm:px-6 lg:px-8 -mt-16 pb-6">
          <div className="flex flex-col  gap-6">
            {/* Left Section - Profile Picture */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative group">
                <div className="w-20 h-20 relative">
                  <div className="absolute   rounded-full  " />
                  <div className="relative">
                    <StoryIndicator
                      userId={HeaderData.userId}
                      profilePicture={HeaderData.profilePicture || defaultAvatar}
                      username={HeaderData.userName}
                    />
                    <button
                      className="absolute bottom-0 -right-2 bg-white p-2.5 rounded-full shadow-lg hover:bg-gray-50 z-50 transition-all duration-300 hover:scale-110"
                      onClick={handleCameraClick}
                      disabled={isUploading}
                    >
                      <FaCamera className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileChange}
                disabled={isUploading}
              />
              <input
                type="file"
                ref={storyInputRef}
                style={{ display: "none" }}
                accept="image/*,video/*"
                onChange={handleStoryFileChange}
                disabled={isUploading}
              />
            </div>

            {/* Middle Section - User Info */}
            <div className="flex-1 flex flex-col items-center lg:items-start">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {HeaderData.userName}
                </h1>
                <div className="flex items-center justify-center lg:justify-start mt-2 text-gray-600">
                  <FaUserFriends className="mr-2" />
                  <span>{HeaderData.totalFriends > 0 ? HeaderData.totalFriends : 6} friends</span>
                </div>
              </div>

              {/* Friends List */}
              <div className="mt-4 flex justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {HeaderData.friends.map((friend, index) => (
                    <div key={index} className="relative group">
                      <img
                        alt={`Friend ${index + 1}`}
                        className="w-10 h-10 rounded-full border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-110"
                        src={friend || defaultAvatar}
                        onError={(e) => e.target.src = defaultAvatar}
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full flex items-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={handleAddToStory}
                  disabled={isUploading}
                >
                  <FaPlus className="mr-2" />
                  Add to story
                </button>
                <button 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full flex items-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => setShowEditModal(true)}
                  disabled={isUploading}
                >
                  <FaEdit className="mr-2" /> 
                  Edit profile
                </button>
              </div>
              <div className="flex gap-3">
                <button 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <FaDownload className="w-5 h-5" />
                </button>
                <button 
                  className="bg-gradient-to-r from-gray-500 to-gray-600 text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <FaEllipsisH className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Creation Modal */}
      {showStoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-2xl transform transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Create Story
              </h3>
              <button 
                onClick={() => {
                  setShowStoryModal(false);
                  setStoryPreview(null);
                  setStoryCaption('');
                }}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                <FaTimes />
              </button>
            </div>
            
            {storyPreview && (
              <div className="mb-4 rounded-xl overflow-hidden shadow-lg">
                {storyPreview.file.type.startsWith('image/') ? (
                  <img 
                    src={storyPreview.previewUrl} 
                    alt="Story preview" 
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <video 
                    src={storyPreview.previewUrl} 
                    controls 
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>
            )}

            <textarea
              className="w-full p-3 border border-gray-200 rounded-xl mb-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              placeholder="Write a caption..."
              value={storyCaption}
              onChange={(e) => setStoryCaption(e.target.value)}
              rows="3"
            />

            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                onClick={() => {
                  setShowStoryModal(false);
                  setStoryPreview(null);
                  setStoryCaption('');
                }}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                onClick={handleStorySubmit}
                disabled={isUploading}
              >
                {isUploading ? 'Creating...' : 'Create Story'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-2xl transform transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Edit Profile
              </h3>
              <button 
                onClick={() => setShowEditModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={editForm.firstName}
                  onChange={handleEditFormChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Surname</label>
                <input
                  type="text"
                  name="surname"
                  value={editForm.surname}
                  onChange={handleEditFormChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  name="gender"
                  value={editForm.gender}
                  onChange={handleEditFormChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formatDateForInput(editForm.dateOfBirth)}
                  onChange={handleEditFormChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                onClick={handleEditProfile}
                disabled={isUploading}
              >
                {isUploading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;