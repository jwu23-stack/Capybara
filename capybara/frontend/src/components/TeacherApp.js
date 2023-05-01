import React from 'react';
import AddIcon from '@mui/icons-material/Add';

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

            <form>
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
                    <select id="inputCity" class="form-control no-border">
                      <option selected>Select City</option>
                      <option>Seattle</option>
                      <option>Lynnwood</option>
                      <option>Shoreline</option>
                    </select>
                  </div>
                  <div class="col">
                    <label for="inputState" class="inputTitleState">·</label>
                    <select id="inputState" class="form-control no-border">
                      <option selected>Select State</option>
                      <option>WA</option>
                      <option>OR</option>
                      <option>CA</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
            <div class="btn-block">
              <button type="button" class="btn btn-primary">Next</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}