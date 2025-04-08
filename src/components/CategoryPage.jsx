import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/CategoryPage.css";

const CategoryPage = () => {
  const { cat } = useParams();
  console.log("cat",cat)
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );
        setFoods(filtered);
      });
  }, [cat]);

  const handleOrder = (item) => {
    alert(`You have ordered: ${item.name} for ₹${item.price}`);
    // You can add POST logic here if needed
  };

  return (
    <div className="category-container">
      <h2>{category}</h2>
      <div className="food-grid">
        {foods.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => handleOrder(item)}>Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
