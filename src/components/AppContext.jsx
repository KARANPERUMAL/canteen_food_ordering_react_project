import React, { createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      setUsers(usersData);
    }
  }, []);

  const addUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <AppContext.Provider value={{ users, addUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
