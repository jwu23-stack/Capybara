import React, { useState, useEffect } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import { getDatabase, ref, onValue } from 'firebase/database';
import { useParams } from 'react-router-dom';

export function Profile(props) {
  const db = getDatabase();
  const [fullName, updateFullName] = useState("");
  const [location, updateLocation] = useState("");
  const [memberSince, updateMemberSince] = useState("");
  const [firstName, updateFirstName] = useState("");
  const [lastName, updateLastName] = useState("");
  const [description, updateDescription] = useState("");
  const [selectedCity, setSelectedCity] = useState("city");
  const [selectedState, setSelectedState] = useState("state");
  const [isToggled, setIsToggled] = useState(false);
  const [buttonText, setButtonText] = useState("Edit Profile");
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
        updateFirstName(data.firstName);
        updateLastName(data.lastName);
        updateDescription(data.description);
        updateFullName(data.firstName + " " + data.lastName);
      }
    })

    return () => {
      isMounted = false;
    }
  }, [])

  const handleEditClick = () => {
    setIsToggled(!isToggled);
    setButtonText((prevText) => (prevText === "Edit Profile" ? "Save & Exit" : "Edit Profile"))
  }

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  }

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  }

  return (
    <div id="profile">
      <div className="d-flex flex-column">
        {/* Profile background image */}
        <div className="banner-image">
          <img src={require('../img/profile_background.png')} alt="profile background" className="profile-banner-img"></img>

        </div>
        <div className="edit-profile-container">
          <button type="button" className="btn btn-warning px-3 edit-profile-btn" onClick={handleEditClick}>{buttonText}</button>
        </div>
        <div className="d-flex flex-row profile-container">
          {/* User Profile Details */}
          <div className={`d-flex flex-column user-details-container ${isToggled ? "hidden" : ""}`}>
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
            <div className={`general-info-container ${isToggled ? "hidden" : ""}`}>
              <div className="introductions">
                <h1 className="fw-bold">Hi, I'm {firstName}</h1>
                <p className="introduction-paragraph">{description}</p>
                <hr></hr>
              </div>
              <div>
                <h1 className="fw-bold">Interested in learning: </h1>
                {/* Pull classes into here */}
              </div>
            </div>
          </div>
        </div>
        {/* Edit Profile Settings */}
        <div className="profile-background d-flex flex-column align-items-center">
          <div className={`${!isToggled ? "hidden" : ""} d-flex flex-column align-items-center`} style={{ width: "100%" }}>
            <img src={require('../img/default_user.jpeg')} alt="default user" className="profile-pic"></img>
            <div className="d-flex flex-row flex-nowrap" style={{ marginTop: "3em" }}>
              <div className="d-flex flex-column">
                <label htmlFor="inlineFormInputName" className="inputTitle">First Name</label>
                <input type="text" className="profile-input-field" placeholder={firstName} value={firstName} onChange={e => updateFirstName(e.target.value)}></input>
              </div>
              <div className="d-flex flex-column" style={{ marginLeft: "5em" }}>
                <label htmlFor="inlineFormInputName" className="inputTitle">Last Name</label>
                <input type="text" className="profile-input-field" placeholder={lastName} value={lastName} onChange={e => updateLastName(e.target.value)}></input>
              </div>
            </div>
            <div className="d-flex flex-row flex-nowrap" style={{ marginTop: "3em" }}>
              <div className="d-flex flex-column">
                <label htmlFor="inputCity" className="inputTitle">What City and State do you live in?</label>
                <select id="inputCity" value={selectedCity} className="profile-input-field no-border" onChange={handleCityChange}>
                  <option value="city">City</option>
                  <option value="seattle">Seattle</option>
                  <option value="lynnwood">Lynnwood</option>
                  <option value="shoreline">Shoreline</option>
                  <option value="tacoma">Tacoma</option>
                  <option value="bellevue">Bellevue</option>
                  <option value="everett">Everett</option>
                  <option value="olympia">Olympia</option>
                  <option value="redmond">Redmond</option>
                  <option value="renton">Renton</option>
                </select>
              </div>
              <div className="d-flex flex-column" style={{ marginLeft: "5em", marginTop: "2.3em" }}>
                <select id="inputState" value={selectedState} className="profile-input-field no-border" onChange={handleStateChange}>
                  <option value="state">State</option>
                  <option value="WA">WA</option>
                  <option value="Or">OR</option>
                  <option value="CA">CA</option>
                </select>
              </div>
            </div>
            <div className="d-flex flex-row flex-nowrap" style={{ marginTop: "3em" }}>
              <div className="d-flex flex-column">
                <label htmlFor="inlineFormInputName" className="inputTitle">Biography</label>
                <input type="text" className="profile-textarea-field" placeholder={description} value={description || ''} onChange={e => updateDescription(e.target.value)}></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}