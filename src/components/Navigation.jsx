import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav">
      <NavLink exact to="/" className="nav-link" activeClassName="active">
        About Me
      </NavLink>
      <NavLink to="/Portfolio" className="nav-link" activeClassName="active">
        Portfolio
      </NavLink>
      <NavLink to="/Contact" className="nav-link" activeClassName="active">
        Contact
      </NavLink>
      <NavLink to="/Resume" className="nav-link" activeClassName="active">
        Resume
      </NavLink>
    </nav>
  );
}
