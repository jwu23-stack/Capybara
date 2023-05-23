import React, { useState, useEffect } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import { getDatabase, ref, onValue } from 'firebase/database';
import { useParams } from 'react-router-dom';

export function Profile(props) {
  const db = getDatabase();
  const [fullName, updateFullName] = useState("");
  const [location, updateLocation] = useState("");
  const [memberSince, updateMemberSince] = useState("");
  const [name, updateName] = useState("");
  const [description, updateDescription] = useState("")
  const urlParams = useParams();


  // NOTE: This implementation means that the page will load with some blanks, and then render the correct info.
  // I'm sure there's a better way to do this (maybe show a loading spinner until the request completes?) but
  // I don't really feel like figuring it out right now. -Matt

  // Oh and also if you try and view a profile with an invalid path, it shows the page with all the blanks.

  useEffect(() => {
    let isMounted = true;
    const userRef = ref(db, "/user/" + urlParams.profileID);

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists() && isMounted) {
        updateLocation(data.location);
        updateMemberSince(data.joinYear);
        updateName(data.firstName);
        updateDescription(data.description);
        updateFullName(data.firstName + " " + data.lastName);
      }
    })

    return () => {
      isMounted = false;
    }
  }, [])

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
            <p className="profile-name">{fullName}</p>
            <div className="d-flex flex-row align-self-start general-info">
              <i className="bi bi-geo-alt details-icon"></i>
              <p className="location">{location}</p>
            </div>
            <div className="d-flex flex-row align-self-start general-info">
              <i className="bi bi-person details-icon"></i>
              <p className="location">Member since {memberSince}</p>
            </div>
          </div>
          {/* Edit Button and General info */}
          <div>
            <button type="button" className="btn btn-warning px-3 edit-profile-btn">Edit Profile</button>
            <div className="introductions">
              <h1 className="fw-bold">Hi, I'm {name}</h1>
              <p className="introduction-paragraph">{description}</p>
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
          <div className="hidden">
          <img src={require('../img/default_user.jpeg')} alt="default user" className="profile-pic"></img>
          </div>
        </div>
      </div>
    </div>
  )
}