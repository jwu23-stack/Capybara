import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export function Onboarding() {
  return (
    <div class="jumbotron"> 
      <div class="app-container">
        {/* <div class="p-5 mb-4 rounded-10"> */}
          <div class="profile-setup">
            <div class="profile-setup-intro">
              <h2>
                Welcome to Hobbio!
              </h2>
              <p>Please take a moment to fill out your profile so that others can learn more about you and your hobbies. (Don’t worry, you can always edit your profile later!)</p>
            </div>

            <form class="profile-setup-content">
              <div class="row">
                <div class="col">
                  <label for="inlineFormInputName" class="inputTitle">First Name</label>
                  <input type="text" class="form-control" placeholder="Johnny"></input>
                </div>
                <div class="col">
                  <label for="inlineFormInputName" class="inputTitle">Last Name</label>
                  <input type="text" class="form-control" placeholder="Appleseed"></input>
                </div>
                <div class="row">
                  <div class="col">
                    <label for="inputCity" class="inputTitle">What city do you live in?</label>
                    <select id="inputCity" class="form-select no-border">
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
                <div class="row">
                  <div class="col">
                    <select id="inputState" class="form-select no-border">
                      <option selected>State</option>
                      <option>WA</option>
                      <option>OR</option>
                      <option>CA</option>
                    </select>
                  </div>
                  <div class="col">
                    <select id="inputZipCode" class="form-select no-border">
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
                <div class="row">
                    <div class="col">
                      <label for="inputHobby" class="inputTitle">What kind of hobby are you interested in?</label>
                      <select id="inputHobby" class="form-select no-border">
                        <option selected>Select Hobby</option>
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
            <div class="btn-block">
              <Link to="/home">
                <button type="button" class="btn btn-primary">Confirm</button>
              </Link>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  )
}