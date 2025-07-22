import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/api';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      <Link to='/create'>Create Post</Link>
      {posts.map((post) => (
        <div key={post._id}>
          <h2><Link to={`/post/${post._id}`}>{post.title}</Link></h2>
          <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
