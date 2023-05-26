import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from './Card.js';
import { getDatabase, ref, get } from 'firebase/database';
// TODO: Handle multiple pages (sobbing)
// TODO: Add header with image
export function SubcategoryPage() {
  const [classCards, updateCards] = useState([]);
  const [subcategoryBanner, setSubcategoryBanner] = useState("");
  const [subcategoryName, setSubcategoryName] = useState("");
  const urlParams = useParams();
  useEffect(() => {
    let isMounted = true;
    const database = getDatabase();
    const subcategoryRef = ref(database, "subcategory/" + urlParams.subcategoryID);
    const classRef = ref(database, "class");
    let ids = [];
    let cards = [];
    let response = [];
    get(subcategoryRef).then((snapshot) => {
      setSubcategoryBanner(snapshot.val().bannerImg);
      setSubcategoryName(snapshot.val().name);
      if (snapshot.exists() && snapshot.val().classes) {
        ids = snapshot.val().classes.split(",").map(Number);
      } else {
        console.log("No classes!")
        // TODO: Show some sort of error page
      }
    }).then(() => {
      // Pull all the categories
      get(classRef).then((snapshot) => {
        if (snapshot.exists()) {
          response = snapshot.val();
        } else {
          console.log("No categories!");
        }
      }).then(() => {
        ids.forEach((id) => {
          cards.push(<Card key={response[id].name} title={response[id].name} level={response[id].level} teacher={response[id].teacherName} teacherExp={response[id].teacherExp} image={response[id].thumbnail} goTo={"/class/" + id} location={response[id].location}></Card>);
        })
        if (isMounted) {
          updateCards(cards);
        }
      });
    })
    return () => {
      isMounted = false;
    }
  }, []);

  return (
    // Render the cards
    <div id="category-container">
      <div className="category-banner">
        <img src={subcategoryBanner} className="img-fluid rounded banner-image" alt={subcategoryName} />
        <p className="text">{subcategoryName}</p>
      </div>
      <div id="subcategory" className="category-container text-left">
        <div className="row row-cols-4">
          {classCards}
        </div>
      </div>
    </div>
    // TODO: add navigation to additional pages (if needed)
  );
}