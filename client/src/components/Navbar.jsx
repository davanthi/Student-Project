import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">Students</Link>
        </li>
        <li>
          <Link to="/add">Add Student</Link>
        </li>
        <li>
          <Link to="/update">Update Student</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
