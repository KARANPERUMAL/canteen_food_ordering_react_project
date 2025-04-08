import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['Fast Foods', 'Meals', 'Drinks', 'Deserts', 'Snacks'];

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to CampusEats</h1>
      <div className="category-buttons">
        {categories.map((cat, index) => (
          <Link key={index} to={`/${cat.replace(/\s+/g, '')}`} className="category-btn">
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
