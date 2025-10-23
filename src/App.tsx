import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import PostList from "./Components/PostList";
import PostDetail from "./Components/PostDetail";
import PostForm from "./Components/PostForm";
import PostCard from "./Components/PostCard";
import { PostsProvider } from "./Context/PostContext";

export default function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/create" element={<PostForm mode="create" />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/edit/:id" element={<PostForm mode="edit" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </PostsProvider>
  );
}
