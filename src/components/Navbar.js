import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2 className="title">
        Income <span className="text-secondary">Control</span>{" "}
      </h2>

      <ul>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
