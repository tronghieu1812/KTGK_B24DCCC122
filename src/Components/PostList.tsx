import React, { useState } from "react";

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  description: string;
  image: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Khám phá công nghệ TypeScript",
      author: "Nguyễn Hiếu",
      date: "22/10/2025",
      description: "Tìm hiểu về TypeScript và lý do tại sao nó được ưa chuộng trong phát triển web hiện đại.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    },
    {
      id: 2,
      title: "React Hooks - Tương lai của React",
      author: "Trần Minh",
      date: "21/10/2025",
      description: "React Hooks giúp lập trình viên viết code ngắn gọn, dễ hiểu hơn và quản lý tốt hơn state.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      id: 3,
      title: "Kỹ thuật tối ưu hiệu năng web",
      author: "Lê Anh",
      date: "20/10/2025",
      description: "Học cách tối ưu tốc độ tải trang và trải nghiệm người dùng trong các ứng dụng web.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      id: 4,
      title: "Xây dựng REST API bằng Node.js",
      author: "Hoàng Quân",
      date: "19/10/2025",
      description: "Tìm hiểu cách xây dựng RESTful API đơn giản và mạnh mẽ bằng ExpressJS.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    },
    {
      id: 5,
      title: "Làm chủ CSS Grid và Flexbox",
      author: "Bích Ngọc",
      date: "18/10/2025",
      description: "Hiểu sâu về CSS Grid và Flexbox để thiết kế giao diện web responsive chuyên nghiệp.",
      image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
    },
  ]);

  // ✅ Định nghĩa hàm xử lý “Xem chi tiết”
  const handleViewDetails = (post: Post) => {
    alert(`📘 ${post.title}\n\n${post.description}`);
  };

  // ✅ Định nghĩa hàm xử lý “Xóa”
  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa bài viết này?");
    if (confirmDelete) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <img src={post.image} alt={post.title} className="post-image" />
          <div className="post-content">
            <h3>{post.title}</h3>
            <p className="meta">
              ✍️ {post.author} | 📅 {post.date}
            </p>
            <p className="description">{post.description}</p>
            <div className="actions">
              {/* ✅ Gọi đúng hàm handleViewDetails */}
              <button onClick={() => handleViewDetails(post)}>Xem chi tiết</button>
              <button className="delete" onClick={() => handleDelete(post.id)}>
                Xóa
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
