import React from "react";
import { NavLink } from "react-router";

function NavBar() {
  return (
    <nav className="container">
      <div className="logo">React Practice</div>
      <div>
        <NavLink to={"/products"} className={"active"}>
          Products
        </NavLink>
        <NavLink to={"/category"}>Category</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
