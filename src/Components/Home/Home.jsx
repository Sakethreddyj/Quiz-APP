import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const images = [
    'Averages.png',
    'Percentages.png',
    'Pro.png',
    'Trains.png',
  ];

  return (
    <div className="home">
      <h1>Apti Quiz</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <Link key={index} to={`/quiz/${index + 1}`}>
            <img src={image} alt={`Image ${index + 1}`} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
