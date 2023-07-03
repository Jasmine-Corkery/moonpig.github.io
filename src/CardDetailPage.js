//imports dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// defines the card detail page component 
const CardDetailPage = () => {
  const { ProductId } = useParams();
  // setup state variables using the useState hook
  const [cardImage, setCardImage] = useState('');
  const [cardTitle, setCardTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to fetch the card details when the product ID changes.
  // makes a get request to the search.json endpoint and sets the card title and image using the response data
  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await axios.get(
          'https://moonpig.github.io/tech-test-frontend/search.json'
        );
        const product = response.data.Products.find(
          (item) => item.ProductId === parseInt(ProductId)
        );
        if (product) {
          const { Title, ProductImage } = product;
          setCardTitle(Title);
          const cardImageUrl = ProductImage && ProductImage.Link.Href;
          setCardImage(cardImageUrl);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching card details:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchCardDetails();
  }, [ProductId]);

    // returns a loading message if the card details are still loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // logs a comment in the console when the buy button is clicked 
  const handleBuy = () => {
    // Handle buy button click event
    console.log('Buy button clicked!');
  };

  // returns the JSX elements that are styled using inline styles
  return (
    <div>
      <h2>{cardTitle}</h2>
      {cardImage && (
        <img
          src={cardImage}
          alt={cardTitle}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
        <button onClick={handleBuy}
        style={{
          marginTop: '20px',
          marginLeft: '1200px',
          padding: '60px 80px',
          fontSize: '2.2rem',
          backgroundColor: 'pink',
          color: 'white',
          marginBottom: '20px',
        }}>Buy</button>
    </div>
  );
};

// exports the card detail page component
export default CardDetailPage;





















  
