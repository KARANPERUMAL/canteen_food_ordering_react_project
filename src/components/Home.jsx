import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/HomePage.css"; // Add new CSS

const HomePage = () => {
  const categories = ["Fast Foods", "Meals", "Drinks", "Deserts", "Snacks"];

  return (
    <div className="homepage">
      <h1 className="homepage-title">Welcome to CampusEats</h1>
      <div className="category-links">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/category/${category.toLowerCase().replace(" ", "")}`}
            className="category-btn"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
