import React from 'react';

export function AboutUs() {
  return (
    <div id="aboutus">
      {/* banner image */}
      <div>
        <img src={require('../img/aboutus-banner.png')} alt="desk with computers" className="banner-image"></img>
      </div>

      {/* About Us */}
      <div className="d-flex flex-column text-center" id="about-us">
        <h2>About Us</h2>
        <div className='d-flex flex-row table-of-contents-container'>
          <div className="d-flex flex-column table-of-contents align-items-start">
            <dt className="table-padding"><a href="#about-us-top">About Us</a></dt>
            <dt className="table-padding"><a href="#meet-the-team">Our Team</a></dt>
            <dt className="table-padding"><a href="#motive-vision">Motivations & Vision</a></dt>
          </div>
          <div className='d-flex flex-column about-text align-items-start'>
            <div className="col-sm-10 about-text">
              <p className="text-style" id="about-us-top">Hi there! We are” The Capybaras”, a group of curious, driven individuals. For our Capstone project,
                we wanted to create a platform that inspires creativity and learning. This is why we created Hobbio! </p>
              <p className="text-style">Hobbio is a free online platform that allows you to learn, teach, and share your hobbies with others! We help connect you
                with certified teachers in the hobbies you desire through our extensive database. We understand how difficult it can be to
                start a new hobby. Many hobbies require external equipment, expensive classes, and at times, a lack of motivation (let’s be
                honest with ourselves). Hobbio helps eliminate all those pain points through providing a  space for you to connect with others and
                learn something new! </p>
              <p className="text-style">Teachers are certified through filling out an application and getting approved from our internal team. This process takes around
                1-3 business days as we evaluate each application, conduct background checks, and review for certifications/permits/licenses.
                This is to ensure the best learning experience for all! </p>
              <p className="text-style">And so, whether you want to learn beginner’s break dance, practice cooking al dente pasta, and/or master your 3D printing skills,
                you can find the right teacher for you!</p>
              <p className="text-style"><strong>Disclaimer:</strong> Hobbio doesn’t hold responsibility of the teachers. They are not employed by us and each teacher acts as their own
                individual.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="d-flex flex-row text-start align-content-center" id="meet-the-team" style={{ marginRight: "6em", marginLeft: "6em" }}>
        <div>
          <h2 style={{marginTop: "3em"}}>Meet Our Team:</h2>
          <h2 className="subtitle-about">The Capybaras!</h2>
        </div>
        <div className="spacer"></div>
        <div className="d-flex">
          <div className="d-flex flex-column text-center team-member">
            <img src={require('../img/kelsey.png')} alt="kelsey" className="team-pic"></img>
            <p className="fw-bold mb-0">Kelsey Lu</p>
            <p className="mb-0">Project Manager</p>
            <p className="mb-0">kelseylu612@gmail.com</p>
          </div>
          <div className="d-flex flex-column text-center team-member">
            <img src={require('../img/sharlene.png')} alt="sharlene" className="team-pic"></img>
            <p className="fw-bold mb-0">Sharlene Fang</p>
            <p className="mb-0">UX Designer</p>
            <p className="mb-0">sharlenefang1@gmail.com</p>
          </div>
          <div className="d-flex flex-column text-center team-member">
            <img src={require('../img/jerry.png')} alt="jerry" className="team-pic"></img>
            <p className="fw-bold mb-0">Jerry Wu</p>
            <p className="mb-0">Developer</p>
            <p className="mb-0">jerrywu266@gmail.com</p>
          </div>
          <div className="d-flex flex-column text-center team-member">
            <img src={require('../img/matt.png')} alt="matt" className="team-pic"></img>
            <p className="fw-bold mb-0">Matthew Karyadi</p>
            <p className="mb-0">Developer</p>
            <p className="mb-0">matthew.t.karyadi@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Motivations & Vision */}
      <div className="d-flex flex-row align-items-center" id="tutorial">
        <div className="motivation-container">
          <div className="d-flex flex-column text-left motivation-text-container">
            <div className="motive-text">
              <p className="motive-heading" id="motive-vision">Our Motivations</p>
              <p>Our team is motivated by our passions for education and community building. We understand
                just how hard it can be to find a new community in a new setting, so we wanted to simplify that
                experience and make it much more engaging. From our own experiences of finding a new community,
                emerged our opportunity to create this product.</p>
              <p>Though this is just a university capstone project, we still want to provide and
                inspire others with the good will of building communities and finding a new passion. These two values
                are things that further motivate us to use our skillsets to bring a positive change and challenge that
                problem space.</p>
            </div>
            <img src={require('../img/motivations-img.png')} alt="direction signs" className="motivation-img"></img>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="motivation-container">
          <div className="d-flex flex-column text-left motivation-text-container">
            <div className="motive-text">
              <p className="motive-heading">Our Vision</p>
              <p>Our team hopes to build a bridge between hobby learning and building relationships with others. In other
                words, we want to help people build relationships through the act of learning a new hobby. Throughout our
                research, we have learned that people tend to prefer learning something new with a companion, whether
                they be an expert at that topic or a beginner. This newfound camaraderie tends to motivate and support
                the learner in becoming successful in the hobby. In addition, this learning dynamic tends to bring bonds
                and relationships together. With this in mind, our team aims to provide people with a safe platform for
                them to learn new hobbies and find a community.</p>
            </div>
            <img src={require('../img/vision-img.png')} alt="direction signs" className="motivation-img"></img>
          </div>
        </div>
      </div>
    </div>
  )
}