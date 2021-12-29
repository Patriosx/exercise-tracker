import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/create"}>Create Exercise</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
