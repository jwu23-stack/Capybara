import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function NavBar(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleStatusClick = () => {
    if (!props.loginStatus) {
      navigate("/signin");
    } else {
      props.setLoginStatus(false);
      navigate("/");
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg ${props.style} d-flex justify-content-evenly`}>
      <Link to="/" style={{ color: "inherit", textDecoration: "inherit", display: "flex" }}>
        <div className="fw-bold align-self-center"><span id="product-name">Hobbio</span></div>
      </Link>
      <div className="d-flex justify-content-center flex-even me-auto ms-auto">
        <Link to="/home" style={{ color: "inherit", textDecoration: "inherit", display: "flex" }}>
          <div className={`p-3 link ${location.pathname === "/home" ? "active-link" : ""}`}>Explore</div>
        </Link>
        <div className="p-3">Teach</div>
        <div className="p-3">About Us</div>
      </div>
      <div className="d-flex justify-content-end">
        {props.loginStatus ? (
          <Link to="/profile" style={{ color: "inherit", textDecoration: "inherit", display: "flex" }}>
            <div className={`p-3 link ${location.pathname === "/profile" ? "active-link" : ""}`}><span id="profile">Profile</span></div>
          </Link>
        ) : (
          <div>
            <button type="button" className={`btn ${location.pathname === "/" ? "btn-outline-light" : "btn-outline-secondary"} px-3 me-3`}>Sign Up</button>
            <button type="button" onClick={handleStatusClick} className="btn btn-warning px-3 me-5">Sign In</button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar;