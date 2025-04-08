// App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppContext } from "./components/AppContext";
import LoginPage from "./components/LoginPage";
import CreateAccount from "./components/CreateAccount";
import HomePage from "./components/Home";

const App = () => {
  const { isAuthenticated } = useAppContext();

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />}
      />
      <Route
        path="/create"
        element={isAuthenticated ? <Navigate to="/home" /> : <CreateAccount />}
      />
      <Route
        path="/home"
        element={isAuthenticated ? <HomePage /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
