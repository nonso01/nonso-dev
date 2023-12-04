import { Outlet, Link } from "react-router-dom";

export default function Nav({}) {
  return (
    <div className="nav">
      <nav>
        <Link to="/about">About </Link>
        <Link to="/blog"> Blogs </Link>
        <Link to="/contact"> contact </Link>
      </nav>

      <Outlet />
    </div>
  );
}
