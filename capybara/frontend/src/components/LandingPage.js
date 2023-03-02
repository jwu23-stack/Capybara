import React from 'react';

export function Landing() {
  return (
    <div className="landing-page">
      {/* Hero text and image */}
      <div className="d-flex" id="landing-container">
        <div className="d-flex flex-column hero-text">
          <h1>Ready to learn?</h1>
          <p>Hobbio is a free platform where you can learn, teach, and share
            your hobbies and passions.
          </p>
          <button type="button" className="btn btn-warning mt-3 px-5">Sign Up</button>
        </div>
        {/* Image */}
        <div className="hero-image"></div>
      </div>
      <div className="d-flex flex-column text-center" id="project-goal">
        <h2>What we do</h2>
        <p>We value shared knowledge here. This is why [Product Name] is all about sharing
        and learning about hobbies that interest you.
        </p>
      </div>

    </div>
  )
}