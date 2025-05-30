// Sidebar.js
import React, { useState } from "react";
import CollectionImg from "src/assets/Images/bg2.png";
import { updateProfile } from "../../../../../utils/Apis";
import { FaBriefcase, FaGraduationCap, FaHome, FaHeart, FaEdit, FaTimes, FaCheck } from 'react-icons/fa';

const Sidebar = ({ repeatedFriends, userProfile, token, onProfileUpdate }) => {
  const [editingBio, setEditingBio] = useState(false);
  const [editingDetails, setEditingDetails] = useState(false);
  const [formData, setFormData] = useState({
    bio: userProfile?.bio || "",
    job: userProfile?.job || "",
    education: userProfile?.education || {
      degree: "",
      institution: "",
      year: "",
    },
    location: userProfile?.location || "",
    relationshipStatus: userProfile?.relationshipStatus || "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEditBio = async () => {
    try {
      setLoading(true);
      await updateProfile({ bio: formData.bio }, token);
      onProfileUpdate();
      setEditingBio(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditDetails = async () => {
    try {
      setLoading(true);
      await updateProfile(
        {
          job: formData.job,
          education: formData.education,
          location: formData.location,
          relationshipStatus: formData.relationshipStatus,
        },
        token
      );
      onProfileUpdate();
      setEditingDetails(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="col-span-2 ">
      {/* Intro Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Intro</h2>
            {!editingBio && (
              <button
                onClick={() => setEditingBio(true)}
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <FaEdit className="w-4 h-4" />
              </button>
            )}
          </div>

          {editingBio ? (
            <div className="space-y-4">
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Tell us about yourself..."
                rows="4"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="flex gap-3">
                <button
                  onClick={handleEditBio}
                  disabled={loading}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={() => setEditingBio(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-600 leading-relaxed">
              {userProfile?.bio || "No bio added yet..."}
            </p>
          )}
        </div>

        {/* Details Section */}
        <div className="border-t border-gray-100 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Details</h2>
            {!editingDetails && (
              <button
                onClick={() => setEditingDetails(true)}
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <FaEdit className="w-4 h-4" />
              </button>
            )}
          </div>

          {editingDetails ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                  <input
                    type="text"
                    value={formData.job}
                    onChange={(e) => setFormData({ ...formData, job: e.target.value })}
                    placeholder="What do you do?"
                    className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Where do you live?"
                    className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                  <input
                    type="text"
                    value={formData.education?.degree || ""}
                    onChange={(e) => setFormData({
                      ...formData,
                      education: { ...formData.education, degree: e.target.value }
                    })}
                    placeholder="Your degree"
                    className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                  <input
                    type="text"
                    value={formData.education?.institution || ""}
                    onChange={(e) => setFormData({
                      ...formData,
                      education: { ...formData.education, institution: e.target.value }
                    })}
                    placeholder="Your school/university"
                    className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                  <input
                    type="number"
                    value={formData.education?.year || ""}
                    onChange={(e) => setFormData({
                      ...formData,
                      education: { ...formData.education, year: e.target.value }
                    })}
                    placeholder="Year of graduation"
                    className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Relationship Status</label>
                  <select
                    value={formData.relationshipStatus}
                    onChange={(e) => setFormData({ ...formData, relationshipStatus: e.target.value })}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select status</option>
                    <option value="Single">Single</option>
                    <option value="In a relationship">In a relationship</option>
                    <option value="Married">Married</option>
                    <option value="Engaged">Engaged</option>
                  </select>
                </div>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="flex gap-3">
                <button
                  onClick={handleEditDetails}
                  disabled={loading}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
                <button
                  onClick={() => setEditingDetails(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <FaBriefcase className="w-5 h-5 text-blue-500 mr-3" />
                <span>{userProfile?.job || "No job added"}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaGraduationCap className="w-5 h-5 text-blue-500 mr-3" />
                <span>
                  {userProfile?.education[0]?.degree || "No degree"} -{" "}
                  {userProfile?.education[0]?.institution || "No institution"} (
                  {userProfile?.education[0]?.year || "No year"})
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaHome className="w-5 h-5 text-blue-500 mr-3" />
                <span>{userProfile?.location || "No location added"}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaHeart className="w-5 h-5 text-blue-500 mr-3" />
                <span>{userProfile?.relationshipStatus || "No status added"}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Friends Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Friends</h2>
          <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
            See all
          </a>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          {repeatedFriends.length} friends
        </p>
        <div className="grid grid-cols-3 gap-4">
          {repeatedFriends.slice(0, 6).map((friend, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-2">
                <img
                  src={friend.image}
                  alt={`Avatar of ${friend.name}`}
                  className="w-full aspect-square rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {friend.active && (
                  <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>
              <p className="text-sm font-medium text-gray-700 truncate">
                {friend.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Collection Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Collection</h2>
        <div className="relative rounded-lg overflow-hidden group">
          <span className="absolute top-0 left-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-br-lg z-10">
            2 Years Ago
          </span>
          <img
            src={CollectionImg}
            alt="Collection"
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
          Edit Featured
        </button>
      </div>
    </div>
  );
};

export { Sidebar as default };

{
  /* <div className="bg-gray-200 p-4 rounded-lg w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-blue-600 text-lg font-semibold">Life events</h2>
                    <a className="text-blue-600 text-sm" href="#">
                        See all
                    </a>
                </div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4 p-4">

                    
                    <div
                        className="rounded-lg w-full flex flex-col justify-between"
                        style={{
                            backgroundImage: `url(${CardImg1})`,
                            backgroundSize: "cover", // Ensures the image fully covers the card
                            backgroundPosition: "center", // Centers the image
                            backgroundRepeat: "no-repeat", // Prevents tiling
                            height: "340px",
                        }}
                    >
                        <div className="p-5 md:p-4 xl:p-0 rounded-b-lg mt-36">
                            <div className="text-center px-12">
                                <h3 className="text-lg font-semibold text-gray-800">Harry</h3>
                                <p className="text-gray-600 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur
                                </p>
                            </div>
                            <div className="flex justify-center mt-2">
                                <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-1 px-4 rounded-full transition duration-300">
                                    Follow
                                </button>
                            </div>
                        </div>
                    </div>

                   
                    <div
                        className="rounded-lg w-full flex flex-col justify-between"
                        style={{
                            backgroundImage: `url(${CardImg2})`,
                            backgroundSize: "cover", // Ensures the image fully covers the card
                            backgroundPosition: "center", // Centers the image
                            backgroundRepeat: "no-repeat", // Prevents tiling
                            height: "340px",
                        }}
                    >
                        <div className="p-4 xl:p-0 rounded-b-lg mt-36">
                            <div className="text-center px-12">
                                <h3 className="text-lg font-semibold text-gray-800">Harry</h3>
                                <p className="text-gray-600 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur
                                </p>
                            </div>
                            <div className="flex justify-center mt-2">
                                <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-5 rounded-full transition duration-300">
                                    Follow
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */
}
