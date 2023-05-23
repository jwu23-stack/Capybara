import React from 'react';

export function Application() {
  return (
    <div class="jumbotron">
      <div class="container">
        <div class="p-5 mb-4 rounded-10">
          <div class="teacher-application">
            <div class="application-intro">
              <h2>
                Hobbio Teacher Interest Application Form
              </h2>
              <p>Thank you for your interest in becoming a teacher on Hobbio! Please complete this application form and we will get back to you in 1-3 business days about your status as a teacher on Hobbio.</p>
            </div>
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">First Name</label>
                  <input type="email" class="form-control" id="firstName" placeholder="First Name"></input>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Last Name</label>
                  <input type="password" class="form-control" id="lastName" placeholder="Last Name"></input>
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress">Email</label>
                <input type="text" class="form-control" id="emailAddress" placeholder="Email Address"></input>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" placeholder="City" id="inputCity"></input>
                </div>
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
              <div id="app-button">
                <button type="submit" class="btn btn-primary">Next</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}