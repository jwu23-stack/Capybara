import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

export function Profile(props) {
  return (
    <div id="profile">
      <div className="d-flex flex-column">
        {/* Profile background image */}
        <div className="banner-image">
          <img src={require('../img/profile_background.png')} alt="profile background" className="profile-banner-img"></img>
        </div>
        <div className="d-flex flex-row profile-container">
          {/* User Profile Details */}
          <div className="d-flex flex-column user-details-container">
            <img src={require('../img/default_user.jpeg')} alt="default user" className="profile-pic"></img>
            <p className="profile-name">Default User</p>
            <div className="d-flex flex-row align-self-start general-info">
              <i className="bi bi-geo-alt details-icon"></i>
              <p className="location">Seattle, WA</p>
            </div>
            <div className="d-flex flex-row align-self-start general-info">
              <i className="bi bi-person details-icon"></i>
              <p className="location">Member since 2022</p>
            </div>
          </div>
          {/* Edit Button and General info */}
          <div>
            <button type="button" className="btn btn-warning px-3 edit-profile-btn">Edit Profile</button>
            <div className="introductions">
              <h1 className="fw-bold">Hi, I'm Jason!</h1>
              <p className="introduction-paragraph">As an out-of-state college student, I'm really interested in trying new things and exploring Seattle!
                I'd love to do both and meet new people which is why I decided to join Hobbio!</p>
              <hr></hr>
            </div>
            <div className="interests">
              <h1 className="fw-bold">Interested in learning: </h1>
              {/* Pull classes into here */}
            </div>
          </div>
        </div>
        {/* Edit Profile Settings */}
        <div className="profile-background">
          <div className="hidden"></div>
        </div>
      </div>
    </div>
  )
}