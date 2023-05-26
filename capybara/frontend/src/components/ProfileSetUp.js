import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, update } from 'firebase/database';

export function Onboarding() {
  const [firstName, updateFirstName] = useState("");
  const [lastName, updateLastName] = useState("");
  const [city, updateCity] = useState("");
  const [state, updateState] = useState("");
  const [zip, updateZip] = useState("");
  const [hobby, updateHobby] = useState("");

  const handleSetup = (event) => {
    event.preventDefault();
    const db = getDatabase();
    update(ref(db, 'user/' + sessionStorage.getItem("uid")), {
      firstName: firstName,
      lastName: lastName,
      location: city + ", " + state,
      zipCode: zip,
      hobbies: hobby
    }).then(() => {
      window.location.href= "/home";
    })
  }

  return (
    <div className="jumbotron">
      <nav className="navbar navbar-expand-lg navbar-auth d-flex justify-content-start" style={{ padding: "15px 0" }}>
        <div className="d-flex navbar-logo">
          <Link to="/">
            <img src={require("../img/navbar-white.png")} alt="hobbio" className="navbar-logo-img"></img>
          </Link>
        </div>
      </nav>
      <div className="app-container">
        {/* <div className="p-5 mb-4 rounded-10"> */}
          <div className="profile-setup">
            <div className="profile-setup-intro">
              <h2>
                Welcome to Hobbio!
              </h2>
              <p>Please take a moment to fill out your profile so that others can learn more about you and your hobbies. (Don’t worry, you can always edit your profile later!)</p>
            </div>

            <form className="profile-setup-content">
              <div className="row">
                <div className="col">
                  <label htmlFor="inlineFormInputName" className="inputTitle" >First Name</label>
                  <input type="text" className="form-control" placeholder="Johnny" value={firstName} onChange={e => updateFirstName(e.target.value)}></input>
                </div>
                <div className="col">
                  <label htmlFor="inlineFormInputName" className="inputTitle">Last Name</label>
                  <input type="text" className="form-control" placeholder="Appleseed" value={lastName} onChange={e => updateLastName(e.target.value)}></input>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="inputCity" className="inputTitle">What city do you live in?</label>
                    <select id="inputCity" className="form-select no-border" onChange={e => updateCity(e.target.value)}>
                      <option selected>City</option>
                      <option>Seattle</option>
                      <option>Lynnwood</option>
                      <option>Shoreline</option>
                      <option>Tacoma</option>
                      <option>Bellevue</option>
                      <option>Everett</option>
                      <option>Olympia</option>
                      <option>Redmond</option>
                      <option>Renton</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <select id="inputState" className="form-select no-border" onChange={e => updateState(e.target.value)}>
                      <option selected>State</option>
                      <option>WA</option>
                      <option>OR</option>
                      <option>CA</option>
                    </select>
                  </div>
                  <div className="col">
                    <select id="inputZipCode" className="form-select no-border" onChange={e => updateZip(e.target.value)}>
                      <option selected>Zip Code</option>
                      <option>99301</option>
                      <option>98052</option>
                      <option>98012</option>
                      <option>98004</option>
                      <option>98005</option>
                      <option>98006</option>
                      <option>98007</option>
                      <option>98008</option>
                      <option>98009</option>
                      <option>98015</option>
                      <option>98101</option>
                      <option>98102</option>
                      <option>98103</option>
                      <option>98104</option>
                      <option>98105</option>
                      <option>98106</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  {/* Grab every category from database */}
                    <div className="col">
                      <label htmlFor="inputHobby" className="inputTitle">What kind of hobby are you interested in?</label>
                      <select id="inputHobby" className="form-select no-border" defaultValue={"select"} onChange={e => updateHobby(e.target.value)}>
                        <option>Select Hobby</option>
                        <option>3D Art</option>
                        <option>Collecting</option>
                        <option>Craft Making</option>
                        <option>Food & Drinks</option>
                        <option>Gaming</option>
                        <option>Gardening</option>
                        <option>Language Learning</option>
                        <option>Literary</option>
                        <option>Music</option>
                        <option>Performing Arts</option>
                        <option>Visual Arts</option>
                        <option>Sports</option>
                        <option>Other</option>
                      </select>
                    </div>
                </div>

              </div>
            </form>
            <div className="btn-block">
              <Link to="/home">
                <button type="button" className="btn btn-primary" onClick={handleSetup}>Confirm</button>
              </Link>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  )
}