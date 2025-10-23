import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
          alt="Blog Logo"
          className="navbar-logo"
        />
        <h1 className="navbar-title">Blog Manager</h1>
      </div>

      <nav className="navbar-right">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          🏠 Trang chủ
        </NavLink>
        <span className="divider">|</span>
        <NavLink
          to="/create"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          ✍️ Viết bài
        </NavLink>
      </nav>
    </header>
  );
}
