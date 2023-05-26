import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function NavBar(props) {
  const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logoImg = location.pathname === "/" | location.pathname === "/teach";

  useEffect(() => {
    let status = (sessionStorage.getItem("email")) ? true : false;
    setLoginStatus(status)
    console.log(sessionStorage);
    console.log("Login status on App", status);
  }, []);

  const handleStatusClick = () => {
    if (!props.loginStatus) {
      navigate("/signin");
    } else {
      props.setLoginStatus(false);
      navigate("/");
    }
  }

  const handleStatusClick2 = () => {
    if (!props.loginStatus) {
      navigate("/signup");
    } else {
      props.setLoginStatus(false);
      navigate("/");
    }
  }
  return (
    <nav className={`navbar navbar-expand-lg ${props.style} d-flex justify-content-evenly`}>
      <div className="d-flex navbar-logo">
        <Link to={loginStatus ? "/home" : "/"}>
          <img src={logoImg ? require("../img/navbar-white.png") : require("../img/navbar-black.png")} alt="hobbio" className="navbar-logo-img"></img>
        </Link>
      </div>

      <div className="d-flex justify-content-center flex-even me-auto ms-auto">
        <Link to="/explore" style={{ color: "inherit", textDecoration: "inherit", display: "flex" }}>
          <div className={`p-3 link ${location.pathname === "/explore" ? "active-link" : "default-link"}`}>Explore</div>
        </Link>
        <Link to="/teach" className="link" style={{ color: "inherit", textDecoration: "inherit", display: "flex" }}>
          <div className={`p-3 link ${location.pathname === "/teach" ? "active-link" : "default-link"}`}>Teach</div>
        </Link>
        <Link to="/about" className="link" style={{ color: "inherit", textDecoration: "inherit", display: "flex" }}>
          <div className={`p-3 link ${location.pathname === "/about" ? "active-link" : "default-link"}`}>About Us</div>
        </Link>
      </div>
      <div className="d-flex justify-content-end">
        {props.loginStatus ? (
          <Link to={"/profile/" +  sessionStorage.getItem("uid")} style={{ color: "inherit", textDecoration: "inherit", display: "flex" }}>
            <div className={`p-3 link ${location.pathname === "/profile/"  + sessionStorage.getItem("uid") ? "active-link" : "default-link"}`}><span id="profile">Profile</span></div>
          </Link>
        ) : (
          <div>
            <button type="button" onClick={handleStatusClick2} className={`btn ${(location.pathname === "/" | location.pathname === "/teach") ? "btn-outline-light" : "btn-outline-secondary btn-hover"} px-3 me-3 auth-btn`}>Sign Up</button>
            <button type="button" onClick={handleStatusClick} className="btn btn-warning px-3 me-5 auth-btn">Sign In</button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar;