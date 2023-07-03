// import dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardGallery from './CardGallery';
import CardDetailPage from './CardDetailPage';

// defines the app component, returns the JSX to be rendered in the app component and uses the router component to enable routing
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardGallery />} />
        <Route path="/cards/:ProductId" element={<CardDetailPage />} />
      </Routes>
    </Router>
  );
};
// exports the app component
export default App;



