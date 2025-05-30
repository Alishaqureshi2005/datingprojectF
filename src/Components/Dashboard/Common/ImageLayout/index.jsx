import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';
import { addComment, likePost } from '../../../../utils/Apis';
import { FaThumbsUp, FaComment, FaShare, FaTimes, FaLink, FaHeart, FaRegHeart, FaSmile, FaPaperPlane } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ImageLayout = ({ mediaData, onPostUpdate }) => {
  const [liked, setLiked] = useState(false);
  const [commentValue, setCommentValue] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [shareCount, setShareCount] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Initialize socket connection
    const socket = io('http://localhost:7000', {
      auth: { token }
    });

    // Listen for like updates
    socket.on('post_like_updated', (data) => {
      if (data.postId === mediaData.postId) {
        setLiked(data.isLiked);
        setLikes(prev => data.isLiked ? [...prev, data.userId] : prev.filter(id => id !== data.userId));
      }
    });

    // Listen for new comments
    socket.on('new_comment', (data) => {
      if (data.postId === mediaData.postId) {
        setComments(prev => [...prev, data.comment]);
      }
    });

    // Initial state setup
    setLiked(mediaData?.likes?.includes(mediaData.userId));
    setLikes(mediaData?.likes || []);
    setComments(mediaData?.comments || []);
    setShareCount(mediaData?.shares || 0);

    return () => {
      socket.disconnect();
    };
  }, [mediaData, token]);

  const handleLike = async () => {
    try {
      const response = await likePost(mediaData.postId, token);
      setLiked(!liked);
      setLikes(response.likes);
      if (onPostUpdate) {
        onPostUpdate();
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleComment = async () => {
    if (!commentValue.trim()) return;
    
    try {
      const response = await addComment(mediaData.postId, commentValue.trim(), token);
      setComments(response.comments);
      setCommentValue('');
      if (onPostUpdate) {
        onPostUpdate();
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleShare = async (platform) => {
    const postUrl = `${window.location.origin}/post/${mediaData.postId}`;
    const shareText = `Check out this post by ${mediaData.userName}`;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(postUrl)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${shareText} ${postUrl}`)}`, '_blank');
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(postUrl);
          alert('Link copied to clipboard!');
        } catch (err) {
          console.error('Failed to copy:', err);
        }
        break;
      default:
        break;
    }

    // Increment share count
    setShareCount(prev => prev + 1);
    setShowShareDialog(false);
  };

  // Helper function to check media type
  const getMediaType = (url) => {
    if (!url) return 'unsupported';
    if (url.match(/\.(jpeg|jpg|gif|png)$/)) return 'image';
    if (url.match(/\.(mp4|mov|avi|webm)$/)) return 'video';
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    return 'unsupported';
  };    

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-6 mb-6">
      {/* Header Section */}
      <div className="p-4 flex items-center justify-between  border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={mediaData.Dp}
              alt="User avatar"
              className="w-12 h-12 rounded-full border-2 border-blue-500"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{mediaData.userName}</h3>
            <p className="text-sm text-gray-500">{new Date(mediaData.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <FaTimes className="w-5 h-5" />
        </button>
      </div>

      {/* Media Content */}
      <div className="relative group">
        {(() => {
          const mediaUrl = mediaData?.image || mediaData?.src;
          const mediaType = getMediaType(mediaUrl);

          switch (mediaType) {
            case 'image':
              return (
                <img
                  src={mediaUrl}
                  alt="Post content"
                  className="w-full max-h-[600px] object-cover"
                  loading="lazy"
                />
              );
            case 'video':
              return (
                <video
                  controls
                  className="w-full max-h-[600px] object-cover"
                >
                  <source src={mediaUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              );
            case 'youtube':
              return (
                <iframe
                  src={mediaUrl?.replace("watch?v=", "embed/")}
                  title="YouTube video"
                  className="w-full h-[600px]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              );
            default:
              return (
                <div className="w-full h-[400px] flex items-center justify-center bg-gray-100">
                  <p className="text-gray-500">Unsupported media type</p>
                </div>
              );
          }
        })()}
      </div>

      {/* Interaction Section */}
      <div className="p-4 space-y-4">
        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {likes.slice(0, 3).map((_, index) => (
                <div key={index} className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
              ))}
            </div>
            <span>{likes.length} likes</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>{comments.length} comments</span>
            <span>{shareCount} shares</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between border-t border-b border-gray-100 py-2">
          <button 
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              liked ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={handleLike}
          >
            {liked ? <FaHeart className="w-5 h-5" /> : <FaRegHeart className="w-5 h-5" />}
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            <FaComment className="w-5 h-5" />
            <span>Comment</span>
          </button>
          <button 
            className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            onClick={() => setShowShareDialog(true)}
          >
            <FaShare className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>

        {/* Comments Section */}
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="flex items-start space-x-3">
              <img
                src={comment.user?.profilePic || mediaData.Dp}
                alt={comment.userName}
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1">
                <div className="bg-gray-50 rounded-2xl px-4 py-2">
                  <span className="font-semibold text-sm text-gray-800">
                    {comment.userName}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">{comment.text}</p>
                </div>
                <div className="flex items-center space-x-3 mt-1 ml-2">
                  <button className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Like</button>
                  <button className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Reply</button>
                  <span className="text-xs text-gray-400">{new Date(comment.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Input */}
        <div className="flex items-center space-x-3">
          <img
            src={mediaData.visitorImg}
            alt="User avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1 relative">
            <input
              type="text"
              className="w-full bg-gray-50 rounded-full px-4 py-2 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              placeholder="Write a comment..."
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleComment();
                }
              }}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <FaSmile className="w-5 h-5" />
              </button>
              {commentValue && (
                <button
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                  onClick={handleComment}
                >
                  <FaPaperPlane className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Share Dialog */}
      {showShareDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Share this post</h3>
              <button 
                onClick={() => setShowShareDialog(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center space-x-3 p-4 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <FaFacebook className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-gray-700">Facebook</span>
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center space-x-3 p-4 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <FaTwitter className="w-6 h-6 text-blue-400" />
                <span className="font-medium text-gray-700">Twitter</span>
              </button>
              <button
                onClick={() => handleShare('whatsapp')}
                className="flex items-center space-x-3 p-4 rounded-xl hover:bg-green-50 transition-colors"
              >
                <FaWhatsapp className="w-6 h-6 text-green-500" />
                <span className="font-medium text-gray-700">WhatsApp</span>
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <FaLink className="w-6 h-6 text-gray-600" />
                <span className="font-medium text-gray-700">Copy Link</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageLayout;