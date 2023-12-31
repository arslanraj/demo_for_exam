import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="d-flex justify-content-around mt-2">
      <h3 className="text-primary">CodingPractice</h3>
      <div>
        <Link style={linkStyle}  to="/">
          Home
        </Link>
        <Link style={linkStyle} to="/services">
          Services
        </Link>
        <Link style={linkStyle} to="/about">
          About
        </Link>
      </div>
    </div>
  );

  
}

const linkStyle = {
marginLeft: "1rem",
textDecoration: "none"
}

export default Navbar;
