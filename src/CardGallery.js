// imports dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import CardDetailPage from './CardDetailPage';

//defines the card gallery component
const CardGallery = () => {
  // setup state variables using the useState hook
  const [cards, setCards] = useState([]);

  //uses the useEffect hook to fetch all the cards when the component mounts.
  //makes a get request to the search.json endpoint and sets the cards using the response data
  useEffect(() => {
    console.log('useEffect triggered');
    fetchAllCards();
  }, []);

  const fetchAllCards = async () => {
    try {
      const response = await axios.get(
        'https://moonpig.github.io/tech-test-frontend/search.json'
      );
      if (response.data && response.data.Products) {
        setCards(response.data.Products);
      }
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  // defines a function to render the cards.
  //maps over the cards array and returns a link for each card
  const renderCards = () =>
    cards.map((card) => {
      const {
        ProductId,
        MoonpigProductNo,
        ShortDescription,
        Description,
        ProductImage,
      } = card;

      return (
        <Link
          key={ProductId}
          to={`/cards/${ProductId}`}
          style={{
            display: 'inline-block',
            width: '200px',
            border: '1px solid #ccc',
            margin: '10px',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          <img src={ProductImage.Link.Href} alt={ShortDescription} style={{ width: '100%' }} />
        </Link>
      );
          
        });

  return (
    <div>
      <div>{renderCards()}</div>
      <div>
        <Routes>
          <Route path="/cards/:ProductId" element={<CardDetailPage />} />
        </Routes>
      </div>
    </div>
  );
};

//exports the card gallery component
export default CardGallery;













