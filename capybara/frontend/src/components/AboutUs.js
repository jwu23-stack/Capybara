import React from 'react';
import AddIcon from '@mui/icons-material/Add';

export function AboutUs() {
  return (
    <div id="landing-page">
      {/* banner image */}
      <img src={require('../img/aboutus-banner.png')} alt="desk with computers" className='aboutus-img'></img>
    
      {/* About Us */}
      <div className="d-flex flex-column text-center" id="about-us">
        <h2>About Us</h2>
        <div class="row">
            <div class="col-sm-4 table-of-contents">
                <dt class="table-padding"><a href="about-us-top">About Us</a></dt>
                <dt class="table-padding"><a href="#meet-the-team">Our Team</a></dt>
                <dt class="table-padding"><a href="#motive-vision">Motivations & Vision</a></dt>
            </div>
            <div class="col-sm-8 about-text">
                <p class="text-style" id="about-us-top">Hi there! We are” The Capybaras”, a group of curious, driven individuals. For our Capstone project, 
                   we wanted to create a platform that inspires creativity and learning. This is why we created Hobbio! </p>
                <p class="text-style">Hobbio is a free online platform that allows you to learn, teach, and share your hobbies with others! We help connect you 
                    with certified teachers in the hobbies you desire through our extensive database. We understand how difficult it can be to 
                    start a new hobby. Many hobbies require external equipment, expensive classes, and at times, a lack of motivation (let’s be 
                    honest with ourselves). Hobbio helps eliminate all those pain points through providing a  space for you to connect with others and 
                    learn something new! </p>
                <p class="text-style">Teachers are certified through filling out an application and getting approved from our internal team. This process takes around 
                    1-3 business days as we evaluate each application, conduct background checks, and review for certifications/permits/licenses. 
                    This is to ensure the best learning experience for all! </p>
                <p class="text-style">And so, whether you want to learn beginner’s break dance, practice cooking al dente pasta, and/or master your 3D printing skills, 
                    you can find the right teacher for you!</p>
                <p class="text-style"><strong>Disclaimer:</strong> Hobbio doesn’t hold responsibility of the teachers. They are not employed by us and each teacher acts as their own 
                    individual.</p>
            </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="d-flex flex-column text-center" id="meet-the-team">
        <div class="row">
            <div class="col-sm-4 meet-team-title">
                <h2 id="meet-the-team">Meet Our Team:</h2>
                <h2 className="subtitle-about">The Capybaras!</h2>
            </div>
            <div class="col-sm-8">
                <img src={require('../img/kelsey.jpg')} alt="a girl holding coffee" className="everyone kelsey-image"></img>
                <img src={require('../img/sharlene.jpg')} alt="a girl holding coffee" className="everyone sharlene-image"></img> 
                <img src={require('../img/jerry.jpg')} alt="a girl holding coffee" className="everyone jerry-image"></img> 
                <img src={require('../img/matt.jpg')} alt="a girl holding coffee" className="everyone matt-image"></img>             
            </div>
        </div>
      </div>
        
        {/* Motivations & Vision */}

        <div className="d-flex flex-row align-items-center" id="tutorial">
        <div className="d-flex flex-row motivations-container justify-content-end">
          <div className="d-flex flex-column text-left each-motive-containers">
            <p className="motive-heading" id="motive-vision">Our Motivations</p>
            <p className="motive-text">
              <p>Our team is motivated by our passions for education and community building. We understand 
                just how hard it can be to find a new community in a new setting, so we wanted to simplify that 
                experience and make it much more engaging. From our own experiences of finding a new community, 
                emerged our opportunity to create this product.</p>

              <p>Though this is just a university capstone project, we still want to provide and 
                inspire others with the good will of building communities and finding a new passion. These two values 
                are things that further motivate us to use our skillsets to bring a positive change and challenge that 
                problem space.</p>
            </p>
            <img src={require('../img/motivations-img.png')} alt="direction signs"></img>
          </div>
          <div className="d-flex flex-column text-left each-motive-containers">
            <p className="motive-heading">Our Vision</p>
            <p className="motive-text">Our team hopes to build a bridge between hobby learning and building relationships with others. In other 
                words, we want to help people build relationships through the act of learning a new hobby. Throughout our 
                research, we have learned that people tend to prefer learning something new with a companion, whether 
                they be an expert at that topic or a beginner. This newfound camaraderie tends to motivate and support 
                the learner in becoming successful in the hobby. In addition, this learning dynamic tends to bring bonds 
                and relationships together. With this in mind, our team aims to provide people with a safe platform for 
                them to learn new hobbies and find a community.</p>
            <img src={require('../img/vision-img.png')} alt="direction signs" className="vision-img"></img>
          </div>
        </div>
      </div>
    </div>
  )
}