import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-link">
        About Me
      </NavLink>
      <NavLink to="/Portfolio" className="nav-link">
        Portfolio
      </NavLink>
      <NavLink to="/Contact" className="nav-link">
        Contact
      </NavLink>
      <NavLink to="/Resume" className="nav-link">
        Resume
      </NavLink>
    </nav>
  );
}
