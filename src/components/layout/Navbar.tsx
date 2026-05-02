import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-right">
        <Link to="/">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/hobbies">Hobbies</Link>
        <Link to="/contact">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
