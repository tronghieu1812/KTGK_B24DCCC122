import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePosts } from "../Context/PostContext";

export default function PostForm({ mode }: { mode: "create" | "edit" }) {
  const { createPost, updatePost, getPostById } = usePosts();
  const { id } = useParams();
  const navigate = useNavigate();

  const editingPost = id ? getPostById(id) : null;

  const [title, setTitle] = useState(editingPost?.title || "");
  const [author, setAuthor] = useState(editingPost?.author || "");
  const [thumbnail, setThumbnail] = useState(editingPost?.thumbnail || "");
  const [content, setContent] = useState(editingPost?.content || "");
  const [category, setCategory] = useState(editingPost?.category || "Công nghệ");

  useEffect(() => {
    if (mode === "edit" && !editingPost) {
      alert("Bài viết không tồn tại!");
      navigate("/");
    }
  }, [editingPost]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title.length < 10 || author.length < 3 || content.length < 50) {
      alert("Vui lòng nhập đầy đủ và hợp lệ (tiêu đề ≥10, tác giả ≥3, nội dung ≥50 ký tự)");
      return;
    }

    if (mode === "create") {
      createPost({ title, author, thumbnail, content, category });
      alert("Đăng bài thành công!");
      navigate("/");
    } else if (mode === "edit" && id) {
      updatePost(id, { title, author, thumbnail, content, category });
      alert("Cập nhật thành công!");
      navigate(`/posts/${id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        {mode === "create" ? "Đăng bài mới" : "Chỉnh sửa bài viết"}
      </h2>

      <label className="block mb-2">Tiêu đề</label>
      <input value={title} onChange={e => setTitle(e.target.value)} className="border p-2 w-full mb-4 rounded" />

      <label className="block mb-2">Tác giả</label>
      <input value={author} onChange={e => setAuthor(e.target.value)} className="border p-2 w-full mb-4 rounded" />

      <label className="block mb-2">URL ảnh thumbnail</label>
      <input value={thumbnail} onChange={e => setThumbnail(e.target.value)} className="border p-2 w-full mb-4 rounded" />

      <label className="block mb-2">Thể loại</label>
      <select value={category} onChange={e => setCategory(e.target.value)} className="border p-2 w-full mb-4 rounded">
        <option>Công nghệ</option>
        <option>Du lịch</option>
        <option>Ẩm thực</option>
        <option>Đời sống</option>
        <option>Khác</option>
      </select>

      <label className="block mb-2">Nội dung</label>
      <textarea value={content} onChange={e => setContent(e.target.value)} rows={10} className="border p-2 w-full mb-4 rounded" />

      <div className="flex gap-4">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {mode === "create" ? "Đăng bài" : "Cập nhật"}
        </button>
        <button type="button" onClick={() => navigate(-1)} className="border px-4 py-2 rounded">
          Hủy
        </button>
      </div>
    </form>
  );
}
