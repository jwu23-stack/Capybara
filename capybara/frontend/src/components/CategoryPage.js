import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from './Card.js';
import { getDatabase, ref, get } from 'firebase/database';

export function CategoryPage() {
  const [subcategoryCards, updateCards] = useState([]);
  const [categoryBanner, setCategoryBanner] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const urlParams = useParams();

  useEffect(() => {
    let isMounted = true;
    const database = getDatabase();
    const categoryRef = ref(database, "category/" + urlParams.categoryID);
    const subcategoryRef = ref(database, "subcategory");
    let cards = [];
    let response = [];
    get(categoryRef).then((snapshot) => {
      if (snapshot.exists() && snapshot.val().subcategories) {
        setCategoryBanner(snapshot.val().picture);
        setCategoryName(snapshot.val().name);
      } else {
        console.log("Invalid category!")
      }
    }).then(() => {
      get(subcategoryRef).then((snapshot) => {
        if (snapshot.exists()) {
          response = snapshot.val();
        } else {
          console.log("No categories!");
        }
      }).then(() => {
        response.forEach((subcat, index) => {
          cards.push(<Card key={index} goTo={"/subcategory/" + index} title={subcat.name} image={subcat.image}></Card>);
        })
        if (isMounted) {
          const sortedCards = cards.slice().sort((a, b) => {
            const titleA = a.props.title.toUpperCase();
            const titleB = b.props.title.toUpperCase();
            if (titleA < titleB) {
              return -1;
            }
            if (titleA > titleB) {
              return 1;
            }
            return 0;
          });
          updateCards(sortedCards);
        }
      });
    });
    return () => {
      isMounted = false;
    }
  }, []);

  return (
    // Render the cards
    <div id="category-container">
      <div className="category-banner">
        <img src={categoryBanner} className="img-fluid rounded banner-image" alt={categoryName} />
        <p className="text">{categoryName}</p>
      </div>
      <div id="subcategory" className="category-container text-left">
        <div className="row row-col-3">
          {subcategoryCards}
        </div>
      </div>
    </div>
  );
}