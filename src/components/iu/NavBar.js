import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark mx-2">
        <div className="navbar">
          <div className="navbar-nav fs-4">
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link mx-2" + (isActive ? "active" : " ")
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link mx-2" + (isActive ? "active" : " ")
              }
              to="/Search"
            >
              Search
            </NavLink>

            {/* <NavLink
              className={({ isActive }) =>
                "nav-item nav-link mx-2" + (isActive ? "active" : " ")
              }
              to="/screenMovies"
            >
              Screen
            </NavLink> */}

            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link mx-2" + (isActive ? "active" : " ")
              }
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
