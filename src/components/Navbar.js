import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h2 className="title">
        Income <span className="text-secondary">Control</span>{" "}
      </h2>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
