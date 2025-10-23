import { Post } from "../Types/post";

export const samplePosts: Post[] = [
  {
    id: "1",
    title: "Khám phá React Hooks cơ bản",
    author: "Nguyễn Văn A",
    thumbnail: "https://placekitten.com/400/200",
    content: "React Hooks là một tính năng mạnh mẽ cho phép bạn sử dụng state và các tính năng khác của React mà không cần viết class component...",
    category: "Công nghệ",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Du lịch Đà Lạt 3 ngày 2 đêm",
    author: "Trần Thị B",
    thumbnail: "https://placebear.com/400/200",
    content: "Đà Lạt luôn là điểm đến hấp dẫn với khí hậu mát mẻ quanh năm...",
    category: "Du lịch",
    createdAt: new Date().toISOString(),
  },
];
