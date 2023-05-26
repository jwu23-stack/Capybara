import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

export function Application() {

  const handleClick = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div className="teacher-application">
      <div className="teacher-app-container">
        {/* <div className="p-5 mb-4 rounded-10"> */}
        <div>
          <div className="application-intro text-center">
            <h2>
              Hobbio Teacher Interest Application Form
            </h2>
            <p>Thank you for your interest in becoming a teacher on Hobbio! Please complete this application form and we will get back to you in 1-3 business days about your status as a teacher on Hobbio.</p>
          </div>
          <form className="application-content">
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
                  <label htmlFor="exampleInputEmail" className="inputTitle">Email address</label>
                  <input type="email" className="form-control no-border" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Johnnyappleseed@gmail.com"></input>
                  {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="inputCity" className="inputTitle">Where would you teach in?</label>
                  <select id="inputCity" className="form-select no-border">
                    <option selected>Select City</option>
                    <option>Seattle</option>
                    <option>Lynnwood</option>
                    <option>Shoreline</option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="inputState" className="inputTitleState">·</label>
                  <select id="inputState" className="form-select no-border">
                    <option selected>Select State</option>
                    <option>WA</option>
                    <option>OR</option>
                    <option>CA</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="inlineFormInput" className="inputTitle">Hobby Name</label>
                  <input type="text" className="form-control" placeholder="Advanced Painting"></input>
                </div>
                <div className="col">
                  <label htmlFor="inputHobby" className="inputTitle">Hobby Category</label>
                  <select id="inputHobby" className="form-select no-border">
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
              <div className="row">
                <div className="col">
                  <label htmlFor="exampleInput" className="inputTitle">Hobby Description</label>
                  <input type="text" className="form-control no-border" id="exampleInput" placeholder="Please describe the hobby and what equipment and activities may be required"></input>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="inputHobby" className="inputTitle">Experience Level</label>
                  {/* <small id="formDescription" className="form-text text-muted">How many years have you been doing this hobby?</small> */}
                  <select id="inputHobby" className="form-select no-border">
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
                <div className="col">
                  <label htmlFor="inputHobby" className="inputTitle">Proficiency Level</label>
                  {/* <small id="formDescription" className="form-text text-muted">How many years have you been doing this hobby?</small> */}
                  <select id="inputHobby" className="form-select no-border">
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
              <div className="row">
                <div className="col">
                  <label htmlFor="exampleInput" className="inputTitle">How much time are you willing put in to teach in a month?</label>
                  <input type="text" className="form-control no-border" id="exampleInput" placeholder="Please describe how much time you're planning on putting into teaching per month"></input>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="exampleInput" className="inputTitle">Additional Information</label>
                  <input type="text" className="form-control no-border" id="exampleInput" placeholder="Feel free to let us know any additional information you’d like us to know"></input>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" htmlFor="exampleCheck1">By checking this box, you acknowledge that you give permission to Hobbio to perform a background check and to use your information to assist in the reviewing process.</label>
                  </div>
                </div>
              </div>

            </div>
          </form>
          <div className="btn-block">
            <Link to="/submitted">
              <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AppSubmitted(props) {
  return (
    <div className="application-submitted">
      <div className="check-icon">
        <i className="bi bi-check-circle fs-1"></i>
      </div>
      <h1 className="text-center">Thank you!</h1>
      <h2 className="text-center" style={{color: "#00473e"}}>Your application has been successfully submitted!</h2>
      <p className="text-center" style={{color: "#00473e"}}>We'll let you know the decision in 1-3 business days.</p>
      <div className="btn-block">
        <Link to={props.loginStatus ? "/home" : "/"}>
          <button type="button" className="btn btn-primary">Home</button>
        </Link>
      </div>
    </div>
  )
}