import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar(props) {
  const navigate = useNavigate();

  const handleStatusClick = () => {
    if (!props.loginStatus) {
      navigate("/signin");
    } else {
      props.setLoginStatus(false);
      navigate("/");
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg ${props.loginStatus ? 'navbar-default' : 'navbar-landing'} d-flex justify-content-evenly`}>
      <Link to="/" style={{ color: "inherit", textDecoration: "inherit", display: "flex" }}>
        <div className="fw-bold align-self-center"><span id="product-name">Hobbio</span></div>
      </Link>
      <div className="d-flex justify-content-center flex-even me-auto ms-auto">
        <Link to="/home" className="link" style={{ color: "inherit", textDecoration: "inherit", display: "flex" }}>
          <div className="p-3">Explore</div>
        </Link>
        <div className="p-3">Teach</div>
        <div className="p-3">About Us</div>
      </div>
      <div className="d-flex justify-content-end">
        {props.loginStatus ? (
          <Link to="/profile" style={{ color: "inherit", textDecoration: "inherit", display: "flex" }}>
            <div className=""><span id="profile">Profile</span></div>
          </Link>
        ) : (
          <div>
            <button type="button" className="btn btn-outline-light px-3 me-3">Sign Up</button>
            <button type="button" onClick={handleStatusClick} className="btn btn-warning px-3 me-5">Sign In</button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar;