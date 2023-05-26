import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useParams } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

export function ClassPage(props) {
  const db = getDatabase();
  const urlParams = useParams();
  const [photos, updatePhotos] = useState([]);
  const [name, updateName] = useState();
  const [teacherName, updateTeacherName] = useState();
  const [teacherExperience, updateTeacherExperience] = useState();
  const [teacherPicture, updateTeacherPicture] = useState();
  const [location, updateLocation] = useState();
  const [qualifications, updateQualifications] = useState();
  const [description, updateDescription] = useState();
  const [teacherTitle, updateTeacherTitle] = useState();
  const [teacherDescription, updateTeacherDescription] = useState();
  const [teacherRating, updateTeacherRating] = useState("No reviews");
  const [doneLoading, updateDoneLoading] = useState(false);
  let photoElements = [];

  useEffect(() => {
    let isMounted = true;
    const classRef = ref(db, "/class/" + urlParams.classID);

    const ratingImg = <img src={require("../img/rating.png")} alt="rating"></img>

    onValue(classRef, (snapshot) => {
      const data = snapshot.val()
      if (snapshot.exists() && isMounted) {
        data.pictures.split(',').forEach((image, index) => {
          photoElements.push(<img src={image} alt={data.name + index} key={data.name + index} className="class-img"></img>)
        })
        updatePhotos(photoElements);
        updateName(data.name);
        updateTeacherName(data.teacherName);
        updateTeacherExperience(data.teacherExp);
        updateTeacherPicture(data.teacherPicture);
        updateTeacherTitle(data.teacherTitle);
        updateLocation(data.location);
        updateQualifications(); // Implement this later??
        updateDescription(data.description);
        updateTeacherDescription(data.teacherDescription);
        if (data.hasOwnProperty("teacherDescription")) {
          updateTeacherRating(data.teacherRating);
        }
      }

    })
    updateDoneLoading(true);

    return () => {
      isMounted = false;
    }
  }, [])

  if (!doneLoading) {
    return null;
  }

  const handleClassSignUp = (event) => {
    event.preventDefault();
  }


  return (
    <div>
      {/* Class Pictures */}
      <div className="d-flex flex-row row row-cols-2 class-pic-container">
        <div className="col">
          {photos[0]}
        </div>
        <div className="d-flex flex-row col">
          <div className="d-flex row justify-content-end">
            <div className="d-flex row">
              <div className="col-6">
                {photos[1]}
              </div>
              <div className="col-6">
                {photos[2]}
              </div>
            </div>
            <div className="d-flex row align-items-end">
              <div className="col-6">
                {photos[3]}
              </div>
              <div className="col-6">
                {photos[4]}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Class Details */}
      <div className="d-flex flex-row row row-cols-2 justify-content-center class-details-container">
        <div className="d-flex flex-column col">
          <h1>{name}</h1>
          <p className="primary-color" style={{ fontSize: "18px" }}>Taught by {teacherName} | {teacherExperience} of experience</p>
          <p className="primary-color"><i className="bi bi-geo-alt" style={{ marginRight: "1em" }}></i>{location}</p>
          <hr></hr>
          <h2 style={{ color: '#00473E' }}>Qualifications </h2>
          <div className="d-flex flex-row">
            <div className="d-flex flex-column col-2">
              <img src="https://i.postimg.cc/qRVRrnwz/illustration-badge-award-checkmark.png" alt="USFC certification" className="award-img"></img>
              <p className="text-center">USFC Certification</p>
            </div>
            <div className="d-flex flex-column col-2" style={{ marginLeft: "3em" }}>
              <img src="https://i.postimg.cc/rwY65ktT/illustration-trophy-award-checkmark.png" alt="Fencing award" className="award-img"></img>
              <p className="text-center">Seattle Fencing Competition - 1st Place</p>
            </div>
          </div>
          <h2 style={{ color: '#00473E' }}>Description</h2>
          <p className="primary-color">{description}</p>
        </div>
        <div className="d-flex flex-column">
          <div className="about-teacher rounded-3" style={{ padding: "3em" }}>
            <div className="col-12">
              <div className="d-flex flex-row align-items-center" style={{ marginBottom: "2em" }}>
                <img src={teacherPicture} alt={teacherName} className="teacher-img"></img>
                <div className="d-flex flex-column justify-content-center" style={{ marginLeft: "1em" }}>
                  <h2 style={{ color: '#F2F7F5' }}>{teacherName}</h2>
                  <p style={{ color: "#F2F7F5" }} className="d-flex flex-row justify-content-evenly">{teacherTitle + "  ·  "}<img src={require("../img/rating.png")} alt="rating" style={{ marginLeft: "0.5em" }}></img> {teacherRating /* add in bogus ratings*/} </p>
                </div>
              </div>
              <h2 style={{ color: '#F2F7F5' }}>About Me</h2>
              <p style={{ color: '#F2F7F5' }}>{teacherDescription}</p>
              <h2 style={{ color: "#F2F7F5" }}>Availabilities</h2>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-3">
                  <p style={{ color: "#F2F7F5" }}>Sunday</p>
                  <p style={{ color: "#F2F7F5" }}>Tuesday</p>
                  <p style={{ color: "#F2F7F5" }}>Friday</p>
                </div>
                <div className="col-3">
                  <p style={{ color: "#F2F7F5" }}>11AM-2PM</p>
                  <p style={{ color: "#F2F7F5" }}>8PM-10PM</p>
                  <p style={{ color: "#F2F7F5" }}>10AM-12PM</p>
                  <p style={{ color: "#F2F7F5" }}>7PM-10PM</p>
                </div>
                <div className="d-flex col-6">
                  <button type="button" className="btn btn-primary" onClick={handleClassSignUp}>Make an Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}