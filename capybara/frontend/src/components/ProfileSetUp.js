import React from 'react';
import { Link } from 'react-router-dom';

export function Onboarding() {
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
                  <label htmlFor="inlineFormInputName" className="inputTitle">First Name</label>
                  <input type="text" className="form-control" placeholder="Johnny"></input>
                </div>
                <div className="col">
                  <label htmlFor="inlineFormInputName" className="inputTitle">Last Name</label>
                  <input type="text" className="form-control" placeholder="Appleseed"></input>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="inputCity" className="inputTitle">What city do you live in?</label>
                    <select id="inputCity" className="form-select no-border">
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
                    <select id="inputState" className="form-select no-border">
                      <option selected>State</option>
                      <option>WA</option>
                      <option>OR</option>
                      <option>CA</option>
                    </select>
                  </div>
                  <div className="col">
                    <select id="inputZipCode" className="form-select no-border">
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
                    <div className="col">
                      <label htmlFor="inputHobby" className="inputTitle">What kind of hobby are you interested in?</label>
                      <select id="inputHobby" className="form-select no-border" defaultValue={"select"}>
                        <option value="select">Select Hobby</option>
                        <option value="art">3D Art</option>
                        <option value="collecting">Collecting</option>
                        <option value="crafts">Craft Making</option>
                        <option value="food">Food & Drinks</option>
                        <option value="gaming">Gaming</option>
                        <option value="gardening">Gardening</option>
                        <option value="language">Language Learning</option>
                        <option value="literary">Literary</option>
                        <option value="music">Music</option>
                        <option value="performing-arts">Performing Arts</option>
                        <option value="visual-arts">Visual Arts</option>
                        <option value="sports">Sports</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                </div>

              </div>
            </form>
            <div className="btn-block">
              <Link to="/home">
                <button type="button" className="btn btn-primary">Confirm</button>
              </Link>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  )
}