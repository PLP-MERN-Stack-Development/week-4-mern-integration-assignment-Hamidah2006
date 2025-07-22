import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPost, getPost, updatePost } from '../services/api';

const PostForm = () => {
  const [post, setPost] = useState({ title: '', content: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPost(id).then(setPost);
    }
  }, [id]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) await updatePost(id, post);
    else await createPost(post);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' value={post.title} onChange={handleChange} placeholder='Title' required />
      <textarea name='content' value={post.content} onChange={handleChange} placeholder='Content' required />
      <button type='submit'>{id ? 'Update' : 'Create'} Post</button>
    </form>
  );
};

export default PostForm;
