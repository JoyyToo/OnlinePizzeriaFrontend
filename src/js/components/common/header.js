import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
          <div>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            {" | "}
            <NavLink to="/about" activeClassName="active">About</NavLink>
            {" | "}
            <NavLink to="/categories" activeClassName="active">Categories</NavLink>
            {" | "}
            <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
            {" | "}
            <NavLink to="/login" activeClassName="active">Sign In</NavLink>
          </div>
    </nav>
  );
};

export default Header;