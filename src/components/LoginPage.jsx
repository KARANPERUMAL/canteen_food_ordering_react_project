import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/styles/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Failed to fetch users:', err));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      alert('Login successful');
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      {/* Left panel */}
      <div className="login-left">
        <h2>ONLINE FOOD DELIVERY SERVICE</h2>
        <h1>POWERED BY NPR GROUP OF INSTITUTIONS</h1>
        <p>Don’t have account? <a href="/create">Create account →</a></p>
        <img className="institution-image" src="../src/assets/Images/LoginPageBG2.jpg" alt="Institute" />
      </div>

      {/* Right panel */}
      <div className="login-right">
        <div className="login-logo">CampusEats</div>
        <div className="login-box">
          <h2>Login to your account</h2>
          
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <label className='ForgotPass'>Forgot Password?</label>
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="create-link">
            Don’t have an account? <a href="/create">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
