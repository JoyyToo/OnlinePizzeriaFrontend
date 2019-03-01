import React from "react";
import { NavLink, HashRouter} from "react-router-dom";

const Header = () => {
  return (
    <nav>
        <HashRouter>
          <NavLink to="/" activeClassName="active">Home
          {" | "}
          <NavLink to="about" activeClassName="active">About</NavLink></NavLink>
        </HashRouter>
    </nav>
  );
};

export default Header;