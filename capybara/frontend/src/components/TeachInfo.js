import React from 'react';
import { Link } from 'react-router-dom';

export function TeachInfo() {
  return (
    <div id="teach-page">
      {/* Teach text and image */}
      <div className="d-flex flex-row justify-content-between" id="teach-container">
        <div className="teach-image-container">
          <img src={require('../img/teach-img.png')} alt="teach page" className="teach-image"></img>
        </div>
        <div className="d-flex flex-column teach-text">
          <h1>Interested in teaching others your hobby?</h1>
          <p>Apply to be a teacher and share your hobbies with others!
            Click on the “Apply Now” button and once you're approved,
            you can start your teaching journey.
          </p>
          <button type="button" className="btn btn-warning mt-3 px-5 teach-button">Apply Now</button>
        </div>
      </div>

      {/* What you get to do */}
      <div className="d-flex flex-column text-center" id="project-goal">
        <h2>What you get to do</h2>
        <div class="whatWeDo-container">
          <div class="whatWeDo-column">
            <img src={require('../img/disco-img.png')} alt="people dancing" className='disco-img'></img>
            <h3 className="disco-heading">Share your hobbies</h3>
            <p className="disco-text">When you're excited about your hobbies, others will too! Share your passions through teaching
              one-on-one classes with curious learners. </p>
          </div>
        </div>
        <div class="whatWeDo-container">
          <div class="whatWeDo-column">
            <img src={require('../img/connect-img.png')} alt="people talking with each other" className='connect-img'></img>
            <h3 className="connect-heading">Connect with others</h3>
            <p className="connect-text">Two is better than one. Meet and connect with people in your community
              as you teach them something new in one-on-one classes. </p>
          </div>
        </div>
        <div class="whatWeDo-container">
          <div class="whatWeDo-column">
            <img src={require('../img/art-img.png')} alt="a person painting" className='art-img'></img>
            <h3 className="art-heading">Strengthen your skills</h3>
            <p className="art-text">They say you’ve mastered a skill when you can teach someone else.
              When you become a teacher, not only are you sharing your passions
              with others, but you’re also gaining a stronger grasp of it!  </p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="d-flex flex-column text-center" id="how-it-works">
        <h2>How it works</h2>
        <div class="steps-row">
          <div class="steps-column">
            <img src={require('../img/steps-img.png')} alt="colored pencils" className='steps-img'></img>
          </div>
          <div class="steps-column">
            <div class="individualSteps-column">
              <p className="number-title">1</p>
              <p className="number-text">Fill out a simple application form! You’ll be asked about your hobby
                of choice, why you want to teach it, and why you’re qualified to teach
                said hobby.</p>
            </div>
            <div class="individualSteps-column">
              <p className="number-title">2</p>
              <p className="number-text">Once you press “Submit”, our internal team will review the application.
                This process takes around 1-3 business days as we evaluate each form, conduct
                background checks, and review for certifications/permits/licenses.</p>
            </div>
            <div class="thirdStep-column">
              <p className="number-title">3</p>
              <p className="number-text">If we deem you certified to teach said hobby, you’ll receive an email approving
                you to start teaching! Congrats! </p>
            </div>
          </div>
        </div>
      </div>

      {/* Apply to be a teacher */}
      <div className=" flex-column text-center" id="apply-teacher">
        <h2>Apply to be a Teacher now!</h2>
        <p className="apply-text">Fill out a quick application form and we’ll get back to you in 1-3 business days.</p>

        <button type="button" className="btn btn-warning mt-3 px-5 teach-button">Apply Now</button>
      </div>
    </div>
  )
}