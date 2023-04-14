import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Category } from '../widget/Category.js';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../stylesheets/App.css';

export function Home(props) {
  const [cards, setCards] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ]);

  const handleMoveRight = () => {
    setCards(prevCards => {
      const lastCard = prevCards[prevCards.length - 1];
      const newCards = [...prevCards.slice(0, prevCards.length - 1)];
      return [lastCard, ...newCards];
    });
  };

  // Move to Category folder
  const CardContainer = ({ cards }) => {
    return (
      <div id="category">
        {cards.map((card) => (
          <Category key={card.id} />
        ))}
      </div>
    );
  };

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
            <ArrowBackIosNewIcon fontSize="small" className="arrow" />
          </div>
          <div type="button" className="d-flex dot">
            <ArrowForwardIosIcon fontSize="small" className="arrow" onClick={handleMoveRight} />
          </div>
        </div>
      </div>
      <CardContainer cards={cards} />

      {/* Recommendations */}
      <div className="recommendations-container">
        <div className="d-flex flex-column">
          <h1>Recommendations</h1>
          <p>Browse through the categories of hobbies perfectly catered for you based on your interests.</p>
        </div>
        <div className="catalog-spacer"></div>
        <div className="d-flex flex-row">
          <div className="d-flex dot">
            <ArrowBackIosNewIcon fontSize="small" className="arrow" />
          </div>
          <div className="d-flex dot">
            <ArrowForwardIosIcon fontSize="small" className="arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}