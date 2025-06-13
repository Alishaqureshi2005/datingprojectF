import axios from 'axios';

const API_BASE_URL = 'http://50.6.175.69/api';

// Create a new user (signup)
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/create`, userData);
    return response.data;
  } catch (error) {
    // Handle cases where error.response or error.response.data is undefined
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

// Login user
export const login = async (credentials) => {
  try {
    console.log('Attempting login to:', `${API_BASE_URL}/users/login`);
    const response = await axios.post(`${API_BASE_URL}/users/login`, credentials);
    console.log('Login response:', response);
    return response.data; // Returns the token and user data
  } catch (error) {
    console.error('Login error:', error);
    throw error.response?.data || error; // Throws error message from the backend
  }
};

// Get user by ID (protected)
export const getUserById = async (id, token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get all users (protected)
export const getAllUsers = async (token) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Forget password - send OTP
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/forgot-password`, { email });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


// Get user profile by ID (protected)
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

// Upload profile picture
export const uploadProfilePic = async (formData, token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/users/upload-profile-pic`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

// Create a new post
export const createPost = async (formData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/posts`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

// Get all posts
export const getAllPosts = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

// Get all posts created by the logged-in user
export const getMyPosts = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts/my-posts`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

// Get all posts (news feed)
export const getAllPostsFeed = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts/feed`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("API Response:", response); // Log the API response
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

// Like or unlike a post
export const likePost = async (postId, token) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/posts/${postId}/like`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

// Add a comment to a post
export const addComment = async (postId, comment, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/posts/${postId}/comment`, { text: comment }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

// Send verification email
export const sendVerificationEmail = async (token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/send-verification`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

// Verify email with OTP
export const verifyEmail = async (email,otp, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/verify-email`, { email,otp }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

// Get user profile (GET /api/profile)
export const getProfile = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

// Update user profile (PUT /api/profile)
export const updateProfile = async (profileData, token) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/profile`, profileData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

// Follow a user (POST /api/profile/follow/:targetUserId)
export const followUser = async (targetUserId, token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/profile/follow/${targetUserId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

// Unfollow a user (DELETE /api/profile/follow/:targetUserId)
export const unfollowUser = async (targetUserId, token) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/profile/follow/${targetUserId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

// Story APIs
export const createStory = async (formData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/stories`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

export const getStories = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stories`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

export const getUserStories = async (userId, token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stories/user/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

export const viewStory = async (storyId, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/stories/${storyId}/view`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

export const deleteStory = async (storyId, token) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/stories/${storyId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};

// Edit user information
export const editUser = async (userData, token) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/edit`, userData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    throw new Error(errorMessage);
  }
};