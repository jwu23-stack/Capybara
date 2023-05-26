import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useParams } from 'react-router-dom';

export function ClassPage(props) {
  const db = getDatabase();
  const urlParams = useParams();
  const [photos, updatePhotos] = useState();
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
    const classRef = ref(db, "/class/" + urlParams.classID)
    
    onValue(classRef, (snapshot) => {
      const data = snapshot.val()
      if (snapshot.exists() && isMounted) {
        data.pictures.split(',').forEach((image) => {
          photoElements.push(<img src={image}></img>)
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
    // Cry
  }
  
  
  return (
    <div>
      {photos}
      <div className="row justify-content-center">
        <div className="col-5">
          <h1>{name}</h1>
          <p>Taught by {teacherName} | {teacherExperience} of experience</p>
          <p>{/*Add pin icon here*/}{location}</p>
          <hr></hr>
          <h2 style={{color:'#00473E'}}>Qualifications </h2>
          <div className="row">
            <div className="col-2">
              <img src="https://i.postimg.cc/qRVRrnwz/illustration-badge-award-checkmark.png"></img>
              <p className="text-center">USFC Certification</p>
            </div>
            <div className="col-2">
              <img src="https://i.postimg.cc/rwY65ktT/illustration-trophy-award-checkmark.png"></img>
              <p className="text-center">Seattle Fencing Competition - 1st Place</p>
            </div>
          </div>
          <h2 style={{color:'#00473E'}}>Description</h2>
          <p>{description}</p>
        </div>
        <div className="col-5"> {/*Need to constrain size*/}
          <div className="about-teacher rounded-3 row">
            <div className="col-12">
              <h2 style={{color:'#F2F7F5'}}>{teacherName}</h2>
              <p style={{color:"#F2F7F5"}}>{teacherTitle + "  ·  " + teacherRating /* add in bogus ratings*/} </p>
              <h2 style={{color:'#F2F7F5'}}>About Me</h2>
              <p style={{color:'#F2F7F5'}}>{teacherDescription}</p>
              <h2 style={{color:"#F2F7F5"}}>Availabilities</h2>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <p style={{color:"#F2F7F5"}}>Sunday</p>
                  <p style={{color:"#F2F7F5"}}>Tuesday</p>
                  <p style={{color:"#F2F7F5"}}>Friday</p>
                </div>
                <div className="col-6">
                  <p style={{color:"#F2F7F5"}}>11AM-2PM</p>
                  <p style={{color:"#F2F7F5"}}>8PM-10PM</p>
                  <p style={{color:"#F2F7F5"}}>10AM-12PM</p>
                  <p style={{color:"#F2F7F5"}}>7PM-10PM</p>
                </div>
              </div>
            </div>
            <div className="col-6 align-items-end">
                <button type="button" className="btn btn-primary mt-auto" onClick={handleClassSignUp}>Make an Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}