import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from "../Context/PostContext";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPostById, deletePost } = usePosts();
  const post = id ? getPostById(id) : undefined;

  if (!post) return <p>Bài viết không tồn tại.</p>;

  const handleDelete = () => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      deletePost(post.id);
      alert("Đã xóa bài viết!");
      navigate("/");
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <img src={post.thumbnail} alt={post.title} className="w-full h-60 object-cover rounded mb-4" />
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-2">Tác giả: {post.author}</p>
      <p className="text-gray-500 mb-4">
        Ngày đăng: {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <p className="mb-4 whitespace-pre-line">{post.content}</p>

      <div className="flex gap-4">
        <button onClick={() => navigate(-1)} className="border px-4 py-2 rounded">
          Quay lại
        </button>
        <button onClick={() => navigate(`/posts/edit/${post.id}`)} className="bg-yellow-500 text-white px-4 py-2 rounded">
          Chỉnh sửa
        </button>
        <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">
          Xóa
        </button>
      </div>
    </div>
  );
}
