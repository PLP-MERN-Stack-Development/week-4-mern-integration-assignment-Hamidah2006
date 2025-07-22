import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PostForm from './pages/PostForm';
import SinglePost from './pages/SinglePost';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/new">New Post</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<PostForm />} />
        <Route path="/edit/:id" element={<PostForm />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </div>
  );
}
