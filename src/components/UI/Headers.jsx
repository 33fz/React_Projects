import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container menu-div">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <span>WorldAtlas</span>
            </NavLink>
          </div>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={() => setMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navigation Menu */}
          <nav className={menuOpen ? "open-nav" : ""}>
            <div className="hamburger_close" onClick={() => setMenuOpen(false)}>
              X
            </div>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/country"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
