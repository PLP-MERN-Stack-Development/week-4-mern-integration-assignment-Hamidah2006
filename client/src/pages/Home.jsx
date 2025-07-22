import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts').then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map(post => (
        <div key={post._id}>
          <Link to={`/post/${post._id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}
