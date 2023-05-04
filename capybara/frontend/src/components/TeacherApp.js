import React from 'react';
import AddIcon from '@mui/icons-material/Add';

export function Application() {
  return (
    <div class="jumbotron"> 
      <div class="app-container">
        {/* <div class="p-5 mb-4 rounded-10"> */}
          <div class="teacher-application">
            <div class="application-intro">
              <h2>
                Hobbio Teacher Interest Application Form
              </h2>
              <p>Thank you for your interest in becoming a teacher on Hobbio! Please complete this application form and we will get back to you in 1-3 business days about your status as a teacher on Hobbio.</p>
            </div>
            {/* <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">First Name</label>
                  <input type="email" class="form-control" id="firstName" placeholder="First Name"></input>
                </div>

                <div class="form-group col-md-6">
                  <label for="inputPassword4">Last Name</label>
                  <input type="password" class="form-control" id="lastName" placeholder="Last Name"></input>
                </div>
              
                <div class="form-group">
                  <label for="inputAddress">Email</label>
                  <input type="text" class="form-control" id="emailAddress" placeholder="Email Address"></input>
                </div>
                

                  <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" placeholder="City" id="inputCity"></input>

                  <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                      <option selected>Choose...</option>
                      <option>WA</option>
                      <option>OR</option>
                      <option>CA</option>
                    </select>
                  </div>
                </div>
              </div>
              <div id="app-button">
                <button type="submit" class="btn btn-primary">Next</button>
              </div>
            </form> */}

            <form class="application-content">
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
                    <label for="exampleInputEmail" class="inputTitle">Email address</label>
                    <input type="email" class="form-control no-border" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Johnnyappleseed@gmail.com"></input>
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label for="inputCity" class="inputTitle">Where would you teach in?</label>
                    <select id="inputCity" class="form-select no-border">
                      <option selected>Select City</option>
                      <option>Seattle</option>
                      <option>Lynnwood</option>
                      <option>Shoreline</option>
                    </select>
                  </div>
                  <div class="col">
                    <label for="inputState" class="inputTitleState">·</label>
                    <select id="inputState" class="form-select no-border">
                      <option selected>Select State</option>
                      <option>WA</option>
                      <option>OR</option>
                      <option>CA</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label for="inlineFormInput" class="inputTitle">Hobby Name</label>
                    <input type="text" class="form-control" placeholder="Advanced Painting"></input>
                  </div>
                    <div class="col">
                      <label for="inputHobby" class="inputTitle">Hobby Category</label>
                      <select id="inputHobby" class="form-select no-border">
                        <option selected>Select Category</option>
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
                <div class="row">
                  <div class="col">
                    <label for="exampleInput" class="inputTitle">Hobby Description</label>
                    <input type="text" class="form-control no-border" id="exampleInput" placeholder="Please describe the hobby and what equipment and activities may be required"></input>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label for="inputHobby" class="inputTitle">Experience Level</label>
                    {/* <small id="formDescription" class="form-text text-muted">How many years have you been doing this hobby?</small> */}
                    <select id="inputHobby" class="form-select no-border">
                      <option selected>How many years have you done this hobby?</option>
                      <option>Less than 1 year</option>
                      <option>1 year</option>
                      <option>2 years</option>
                      <option>3 years</option>
                      <option>4 years</option>
                      <option>5 years</option>
                      <option>6 years</option>
                      <option>7 years</option>
                      <option>8 years</option>
                      <option>9 years</option>
                      <option>10 years</option>
                      <option>More than 10 years</option>
                    </select>
                  </div>
                  <div class="col">
                    <label for="inputHobby" class="inputTitle">Proficiency Level</label>
                    {/* <small id="formDescription" class="form-text text-muted">How many years have you been doing this hobby?</small> */}
                    <select id="inputHobby" class="form-select no-border">
                      <option selected>How proficient are you at this hobby?</option>
                      <option>1 (Beginner)</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5 (Average)</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10 (Expert)</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label for="exampleInput" class="inputTitle">How much time are you willing put in to teach in a month?</label>
                    <input type="text" class="form-control no-border" id="exampleInput" placeholder="Please describe how much time you're planning on putting into teaching per month"></input>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label for="exampleInput" class="inputTitle">Additional Information</label>
                    <input type="text" class="form-control no-border" id="exampleInput" placeholder="Feel free to let us know any additional information you’d like us to know"></input>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                      <label class="form-check-label" for="exampleCheck1">By checking this box, you acknowledge that you give permission to Hobbio to perform a background check and to use your information to assist in the reviewing process.</label>
                    </div>
                  </div>
                </div>

              </div>
            </form>
            <div class="btn-block">
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
            
          </div>
        {/* </div> */}
      </div>
    </div>
  )
}