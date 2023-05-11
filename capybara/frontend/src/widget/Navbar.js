import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

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
      <Link to="/" style={{ color: "inherit", textDecoration: "inherit", display: "flex" }}>
        <div className="fw-bold align-self-center"><span id="product-name">Hobbio</span></div>
      </Link>
      <div className="d-flex justify-content-center flex-even me-auto ms-auto">
        <Link to="/home" style={{ color: "inherit", textDecoration: "inherit", display: "flex" }}>
          <div className={`p-3 link ${location.pathname === "/home" ? "active-link" : ""}`}>Explore</div>
        </Link>
        <Link to="/teach" className="link" style={{ color: "inherit", textDecoration: "inherit", display: "flex" }}>
          <div className="p-3">Teach</div>
        </Link>
        <Link to="/about" className="link" style={{ color: "inherit", textDecoration: "inherit", display: "flex" }}>
          <div className="p-3">About Us</div>
        </Link>

        {/* 
        <Nav.Link href="/"><div className="p-3">Explore</div></Nav.Link>
        <Nav.Link href="/TeacherApp.js"><div className="p-3">Teach</div></Nav.Link>
        <Nav.Link href=""><div className="p-3">About Us</div></Nav.Link>
       */}
      </div>
      <div className="d-flex justify-content-end">
        {props.loginStatus ? (
          <Link to="/profile" style={{ color: "inherit", textDecoration: "inherit", display: "flex" }}>
            <div className={`p-3 link ${location.pathname === "/profile" ? "active-link" : ""}`}><span id="profile">Profile</span></div>
          </Link>
        ) : (
            <div>
              <button type="button" onClick={handleStatusClick2} className="btn btn-outline-light px-3 me-3">Sign Up</button>
              <button type="button" onClick={handleStatusClick} className="btn btn-warning px-3 me-5">Sign In</button>
            </div>
          )}
      </div>
    </nav>
  )
}

export default NavBar;