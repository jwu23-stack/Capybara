import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { Carousel } from 'react-responsive-carousel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Card } from './Card.js';
import { Category } from '../widget/Category.js';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../stylesheets/App.css';

export function Home(props) {
  const [categoryCards, setCategoryCards] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const database = getDatabase();
    const subcategoryRef = ref(database, "category");
    let cards = [];
    let response = [];

    // Pull all the categories
    get(subcategoryRef).then((snapshot) => {
      if (snapshot.exists()) {
        response = snapshot.val();
      } else {
        console.log("No categories!");
      }
    }).then(() => {
      response.forEach((entry, index) => {
        cards.push(<Category key={index} goTo={"/category/" + index} title={entry.name} image={entry.picture} subcategories={entry.numsubcats}></Category>);
      })

      // Sort most popular category based on number of subcategories in descending order
      const sortedCards = [...cards].sort((a, b) => {
        return b.props.subcategories - a.props.subcategories
      });

      if (isMounted) {
        setCategoryCards(cards);
        setMostPopular(sortedCards);
      }
    });
    return () => {
      isMounted = false;
    }
  }, [])

  const handleMoveLeft = (setCardArray) => {
    setCardArray(prevCards => {
      const lastCard = prevCards[prevCards.length - 1];
      const newCards = [...prevCards.slice(0, prevCards.length - 1)];
      return [lastCard, ...newCards];
    });
  };

  const handleMoveRight = (setCardArray) => {
    setCardArray(prevCards => {
      const firstCard = prevCards[0];
      const newCards = [...prevCards.slice(1), firstCard]
      return newCards;
    })
  }

  return (
    <div id="home">
      {/* Carousel */}
      <div className="carousel-container">
        <Carousel autoPlay={true} infiniteLoop={true} interval={5000} showArrows={false} showStatus={false} showThumbs={false}>
          <div>
            <img src={require('../img/carousel_01.png')} alt="Carousel 1" />
          </div>
          <div>
            <img src={require('../img/carousel_02.png')} alt="Carousel 2" />
          </div>
          <div>
            <img src={require('../img/carousel_03.png')} alt="Carousel 3" />
          </div>
          <div>
            <img src={require('../img/carousel_04.png')} alt="Carousel 4" />
          </div>
        </Carousel>
      </div>

      {/* Categories */}
      <div className="categories-container">
        <div className="d-flex flex-column">
          <h1>Categories</h1>
          <p>Browse through different categories of hobbies that you're interested in learning.</p>
        </div>
        <div className="catalog-spacer"></div>
        <div className="d-flex flex-row">
          <div className="d-flex dot">
            <ArrowBackIosNewIcon fontSize="small" className="arrow" onClick={() => handleMoveLeft(setCategoryCards)} />
          </div>
          <div type="button" className="d-flex dot">
            <ArrowForwardIosIcon fontSize="small" className="arrow" onClick={() => handleMoveRight(setCategoryCards)} />
          </div>
        </div>
      </div>
      {/* Categories Cards */}
      <div id="category">
        {categoryCards.map((card) => {
          return <Category key={card.key} goTo={card.props.goTo} title={card.props.title} image={card.props.image} />
        })}
      </div>

      {/* Most Popular */}
      <div className="recommendations-container">
        <div className="d-flex flex-column">
          <h1>Most Popular</h1>
          <p>Browse through our most popular categories that you might like to learn.</p>
        </div>
        <div className="catalog-spacer"></div>
        <div className="d-flex flex-row">
          <div className="d-flex dot">
            <ArrowBackIosNewIcon fontSize="small" className="arrow" onClick={() => handleMoveLeft(setMostPopular)} />
          </div>
          <div type="button" className="d-flex dot">
            <ArrowForwardIosIcon fontSize="small" className="arrow" onClick={() => handleMoveRight(setMostPopular)} />
          </div>
        </div>
      </div>
      {/* Most Popular Cards */}
      <div id="category">
        {mostPopular.map((card) => {
          return <Category key={card.key} goTo={card.props.goTo} title={card.props.title} image={card.props.image} />
        })}
      </div>
    </div>
  )
}

export function ExplorePage() {
  const [categoryCards, setCategoryCards] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const database = getDatabase();
    const categoryRef = ref(database, "explore");
    let cards = [];
    let response = [];

    get(categoryRef).then((snapshot) => {
      if (snapshot.exists()) {
        response = snapshot.val();
      } else {
        console.log("No categories!");
      }
    }).then(() => {
      response.forEach((entry, index) => {
        cards.push(<Card key={index} goTo={"/category/" + index} title={entry.name} image={entry.picture}></Card>);
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
        setCategoryCards(sortedCards);
      }
    });
    return () => {
      isMounted = false;
    }
  }, []);

  return (
    <div id="category-container">
      <div className="category-banner">
        <img src={require("../img/explore.png")} className="img-fluid rounded banner-image" alt={"All Categories"} />
        <p className="text">All Categories</p>
      </div>
      <div id="subcategory" className="category-container text-left">
        <div className="row row-cols-4">
          {categoryCards}
        </div>
      </div>
    </div>
  )
}