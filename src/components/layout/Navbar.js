import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">BTracker</Link>
      </div>
    </nav>
  );
}
