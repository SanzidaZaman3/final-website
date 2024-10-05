import React from 'react';
import Slide from '../components/Slide'; // Adjust the import path

const HomePage = () => {
  return (
    <div>
      {/* Add the Slide banner directly in the page */}
      <Slide 
        img="/img/banner.jpeg" 
        title="Amazing Offer" 
        mainTitle="Super Sale" 
        price="199"
      />
      
      {/* Add more content or sections below the banner */}
    </div>
  );
};

export default HomePage;
