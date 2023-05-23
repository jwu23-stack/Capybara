import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export function Landing() {
  const navigate = useNavigate();

  const handleTeachClick = () => {
    navigate("teach");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div id="landing-page">
      {/* Hero text and image */}
      <div className="d-flex" id="landing-container">
        <div className="d-flex flex-column hero-text">
          <h1>Ready to learn?</h1>
          <p>Hobbio is a free platform where you can learn, teach, and share
            your hobbies and passions.
          </p>
          <button type="button" className="btn btn-warning mt-3 px-5 signup-button" onClick={() => {navigate("/signup")}}>Sign Up</button>
        </div>
        <div className="hero-image-container">
          <img src={require('../img/hero-img.png')} alt="landing page" className="hero-image"></img>
        </div>
      </div>

      {/* What we do */}
      <div className="d-flex flex-column text-center" id="project-goal">
        <h2>What we do</h2>
        <p className="goal-text">We value shared knowledge here. This is why Hobbio is all about sharing
          and learning about hobbies that interest you.
        </p>
        <div className="d-flex flex-row mt-4 mb-4">
          <div className="d-flex flex-column text-center align-items-center purpose-container">
            <img src={require('../img/painting.png')} alt="painting" className='purpose-img'></img>
            <h3 className="purpose-heading">Learn</h3>
            <p className="purpose-text">Want to learn photography? Take classes with certified teachers in your community </p>
          </div>
          <div className="d-flex flex-column text-center align-items-center purpose-container">
            <img src={require('../img/apple.png')} alt="apple" className='purpose-img'></img>
            <h3 className="purpose-heading">Teach</h3>
            <p className="purpose-text">Feel like you mastered rock climbing? Become a teacher and share your passion with others!</p>
          </div>
          <div className="d-flex flex-column text-center align-items-center purpose-container">
            <img src={require('../img/handshake.png')} alt="handshake" className='purpose-img'></img>
            <h3 className="purpose-heading">Connect</h3>
            <p className="purpose-text">Just moved to a new city? Connect with others over a shared hobby!</p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="d-flex flex-row align-items-center" id="tutorial">
        <div className="d-flex flex-column tutorial-container">
          <h2>How it works</h2>
          <p className="tutorial-text">When you sign up for Hobbio, you're automatically a learner. If you feel passionate about a specific hobby, you can apply to be a teacher through a simple form. </p>
        </div>
        <div className="d-flex flex-row users-container justify-content-end">
          <div className="d-flex flex-column text-center user-container">
            <img src={require('../img/rockclimbing.jpg')} alt="rock climbing" className="user-image"></img>
            <p className="user-heading">As a Learner</p>
            <p className="user-text">By using our catalog database, find certified teachers in your community that teach your hobby of interest. One you find someone, you can set up a time to meet through their profile and be one step closer to mastering a certain skill. </p>
          </div>
          <div className="d-flex flex-column text-center user-container">
            <img src={require('../img/paintbrush.jpg')} alt="rock climbing" className="user-image"></img>
            <p className="user-heading">As a Teacher</p>
            <p className="user-text">Teach learners about a hobby you're passionate about and connect with people in your community. You will need to fill out a simple application and get approved before starting your teaching journey.</p>
            <button className="astext align-self-end mb-3 learn-more-btn" onClick={handleTeachClick}>Learn More →</button>
          </div>
        </div>
      </div>

      {/* What Users Say */}

      {/* Frequently Asked Questions */}
      <div className="d-flex flex-column justify-content-evenly" id="questions">
        <h2>Frequently Asked Questions</h2>
        <div className="d-flex flex-row mt-3">
          <div className="d-flex flex-column question-container">
            <div className="card mb-3 question-card">
              <h3 className="card-title mt-3 d-flex flex-row align-items-center">
                <button className="astext collapse-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  How do I sign up to be a teacher?
                </button>
                <div className="spacer"></div>
                <button className="astext" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  <AddIcon fontSize="large" sx={{ color: 'black' }} className="add-icon"></AddIcon>
                </button>
              </h3>
              <div id="collapseOne" className="collapse collapse-container">
                <div className="card-body">
                  <span className="collapse-text">You can sign up to be a teacher by going onto the teacher's tab. You can learn more about the expectations of being a teacher and apply to become one. By submitting the application form, we will contact you to let you know your status.</span>
                </div>
              </div>
            </div>
            <div className="spacer"></div>
            <div className="card question-card">
              <h3 className="card-title mt-3 d-flex flex-row align-items-center">
                <button className="astext collapse-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  How frequent are classes?
                </button>
                <div className="spacer"></div>
                <button className="astext" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <AddIcon fontSize="large" sx={{ color: 'black' }} className="add-icon"></AddIcon>
                </button>
              </h3>
              <div id="collapseThree" className="collapse collapse-container">
                <div className="card-body">
                  <span className="collapse-text">You can sign up to be a teacher by going onto the teacher's tab. You can learn more about the expectations of being a teacher and apply to become one. By submitting the application form, we will contact you to let you know your status.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="d-flex flex-column question-container">
            <div className="card mb-3 question-card">
              <h3 className="card-title mt-3 d-flex flex-row align-items-center">
                <button className="astext collapse-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How do I pair up with a teacher?
                </button>
                <div className="spacer"></div>
                <button className="astext" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <AddIcon fontSize="large" sx={{ color: 'black' }} className="add-icon"></AddIcon>
                </button>
              </h3>
              <div id="collapseTwo" className="collapse collapse-container">
                <div className="card-body">
                  <span className="collapse-text"></span>
                </div>
              </div>
            </div>
            <div className="spacer"></div>
            <div className="card question-card">
              <h3 className="card-title mt-3 d-flex flex-row align-items-center">
                <button className="astext collapse-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Where should I start?
                </button>
                <div className="spacer"></div>
                <button className="astext" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  <AddIcon fontSize="large" sx={{ color: 'black' }} className="add-icon"></AddIcon>
                </button>
              </h3>
              <div id="collapseFour" className="collapse collapse-container">
                <div className="card-body">
                  <span className="collapse-text">You can sign up to be a teacher by going onto the teacher's tab. You can learn more about the expectations of being a teacher and apply to become one. By submitting the application form, we will contact you to let you know your status.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}