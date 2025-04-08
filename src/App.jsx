// App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useAppContext } from './components/AppContext';
import LoginPage from './components/LoginPage';
import CreateAccount from './components/CreateAccount';
import HomePage from './components/Home';

// Wrapper to use context inside Routes
const AppRoutes = () => {
  const { isAuthenticated } = useAppContext();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />}
      />
      
      <Route
        path="/create"
        element={isAuthenticated ? <Navigate to="/home" /> : <CreateAccount />}
      />
      
      <Route
        path="/home"
        element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
