// AppContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then(res => res.json())
      .then(data => setFoods(data))
      .catch(err => console.error("Failed to fetch foods:", err));
  }, []);

  return (
    <AppContext.Provider value={{ foods }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
