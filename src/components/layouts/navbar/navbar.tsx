import React from "react";
import { NavLink } from "react-router-dom";
import { House, ChartNoAxesColumnIncreasing, History } from "lucide-react";
export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <House />
      </NavLink>
      <NavLink to="/"></NavLink>
      <NavLink to="/">
        <History />
      </NavLink>
    </nav>
  );
};
