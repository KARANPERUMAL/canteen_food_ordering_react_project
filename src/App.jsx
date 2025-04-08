import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./components/AppContext"; // ✔️ Ensure correct path
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import FastFoodPage from "./components/FastFood";



const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/home" element={<Home />} />
          <Route path="/FastFoods" element={<FastFoodPage/>}/>
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
