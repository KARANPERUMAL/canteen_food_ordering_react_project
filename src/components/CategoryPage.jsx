import React from 'react';

const foodImages = {
  'Fast Foods': [
    { name: 'Burger', img: 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_960_720.jpg' },
    { name: 'Fries', img: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/french-fries-2366708_960_720.jpg' }
  ],
  'Meals': [
    { name: 'Lunch Plate', img: 'https://cdn.pixabay.com/photo/2017/03/17/08/38/rice-2158703_960_720.jpg' }
  ],
  'Drinks': [
    { name: 'Orange Juice', img: 'https://cdn.pixabay.com/photo/2016/07/22/09/59/orange-juice-1532300_960_720.jpg' }
  ],
  'Deserts': [
    { name: 'Ice Cream', img: 'https://cdn.pixabay.com/photo/2017/03/27/13/52/ice-cream-2179013_960_720.jpg' }
  ],
  'Snacks': [
    { name: 'Cookies', img: 'https://cdn.pixabay.com/photo/2014/12/15/13/40/cookies-569153_960_720.jpg' }
  ]
};

const CategoryPage = ({ category }) => {
  const items = foodImages[category] || [];

  return (
    <div className="category-page">
      <h2>{category}</h2>
      <div className="items-container">
        {items.map((item, index) => (
          <div className="item-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Delicious {category.toLowerCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
