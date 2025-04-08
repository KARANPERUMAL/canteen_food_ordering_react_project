import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch('http://localhost:5000/foods');
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.error('Error fetching foods:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  const filteredFoods = foods.filter(
    (food) => food.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="min-h-screen py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 capitalize">
        {categoryName} Menu
      </h2>

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : filteredFoods.length === 0 ? (
        <p className="text-center text-gray-500">No items found.</p>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredFoods.map((food) => (
            <div
              key={food.id}
              className="p-4 border rounded shadow-md max-w-sm bg-white"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{food.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{food.description}</p>
              <p className="text-md font-bold mt-1">₹{food.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
