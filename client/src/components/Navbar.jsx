import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const userData = localStorage.getItem("user");
  const userName = userData ? JSON.parse(userData).userName : "";

  const logout = () => {
    localStorage.clear();
  };

  return (
    <header className="site-header">
      <Link className="brand" to={userData ? "/" : "/login"}>
        <span className="brand-mark">CD</span>
        <span className="brand-copy">
          <strong>CampusDesk</strong>
          <span>Student records</span>
        </span>
      </Link>

      {userData ? (
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
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <span className="user-chip">{userName}</span>
          </li>
          <li>
            <Link className="logout-link" onClick={logout} to="/login">
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link className="logout-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
