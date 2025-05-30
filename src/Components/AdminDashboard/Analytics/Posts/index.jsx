import React, { useState, useEffect } from 'react';
import Loading from '../../Loading';

const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching posts data
    const timer = setTimeout(() => {
      setPosts([
        { id: 1, title: 'Post 1', content: 'Content for post 1' },
        { id: 2, title: 'Post 2', content: 'Content for post 2' },
        { id: 3, title: 'Post 3', content: 'Content for post 3' }
      ]);
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-4 m-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Posts</h2>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-medium">{post.title}</h3>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
