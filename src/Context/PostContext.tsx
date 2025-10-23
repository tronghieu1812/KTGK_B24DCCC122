import React, { createContext, useContext, useState, useEffect } from "react";
import { Post } from "../Types/post";
import { samplePosts } from "../Data/SamplePosts";

interface PostsContextType {
  posts: Post[];
  createPost: (post: Omit<Post, "id" | "createdAt">) => void;
  updatePost: (id: string, data: Partial<Post>) => void;
  deletePost: (id: string) => void;
  getPostById: (id: string) => Post | undefined;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const PostsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>(() => {
    const saved = localStorage.getItem("posts");
    return saved ? JSON.parse(saved) : samplePosts;
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const createPost = (post: Omit<Post, "id" | "createdAt">) => {
    const newPost: Post = {
      ...post,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setPosts([newPost, ...posts]);
  };

  const updatePost = (id: string, data: Partial<Post>) => {
    setPosts(posts.map(p => (p.id === id ? { ...p, ...data } : p)));
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const getPostById = (id: string) => posts.find(p => p.id === id);

  return (
    <PostsContext.Provider value={{ posts, createPost, updatePost, deletePost, getPostById }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const ctx = useContext(PostsContext);
  if (!ctx) throw new Error("usePosts must be used within PostsProvider");
  return ctx;
};
