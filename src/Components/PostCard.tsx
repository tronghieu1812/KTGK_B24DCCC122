import { Post } from "../Types/post";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../Context/PostContext";

export default function PostCard({ post }: { post: Post }) {
  const navigate = useNavigate();
  const { deletePost } = usePosts();

  const handleDelete = () => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      deletePost(post.id);
      alert("Đã xóa bài viết!");
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <img src={post.thumbnail} alt={post.title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
      <p className="text-gray-600 text-sm">Tác giả: {post.author}</p>
      <p className="text-gray-500 text-xs mb-2">
        Ngày đăng: {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <p className="text-gray-700">
        {post.content.slice(0, 100)}...
      </p>
      <div className="flex justify-between mt-3">
        <button onClick={() => navigate(`/posts/${post.id}`)} className="text-blue-600 hover:underline">
          Đọc thêm
        </button>
        <button onClick={handleDelete} className="text-red-600 hover:underline">
          Xóa
        </button>
      </div>
    </div>
  );
}
