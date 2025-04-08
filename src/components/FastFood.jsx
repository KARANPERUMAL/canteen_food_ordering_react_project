import React, { useEffect, useState } from 'react';

const FastFoodPage = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/foods')
      .then(res => res.json())
      .then(data => {
        const fastFoods = data.filter(item => item.category === 'Fast Foods');
        setFoods(fastFoods);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {foods.map(food => (
        <div key={food.id} className="bg-white rounded-2xl shadow-md p-4 text-center">
          <img src={food.image} alt={food.name} className="w-full h-40 object-cover rounded-xl mb-4" />
          <h2 className="text-xl font-semibold">{food.name}</h2>
          <p className="text-gray-500">{food.category}</p>
          <p className="text-green-600 font-bold">₹{food.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FastFoodPage;
