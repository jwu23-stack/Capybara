import React from 'react';

function NavBar(props) {

  // change styling and layout based on user login status

  return (
    <nav className="navbar navbar-expand-lg navbar-inner d-flex justify-content-evenly">
      <div className="flex-even fw-bold align-self-center"><span id="product-name">Hobbio</span></div>
      <div className="d-flex justify-content-center flex-even me-auto ms-auto">
        <div className="p-3">Explore</div>
        <div className="p-3">Teach</div>
        <div className="p-3">About Us</div>
      </div>
      <div className="d-flex flex-even justify-content-end">
        <button type="button" className="btn btn-outline-light px-3 me-3">Sign Up</button>
        <button type="button" className="btn btn-warning px-3 me-5">Sign In</button>
      </div>
    </nav>
  )
}

export default NavBar;