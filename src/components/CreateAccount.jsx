import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../components/styles/CreateAccount.css";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // POST new user to API
      const res = await fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Account created successfully!");
        navigate("/"); // Redirect to login
      } else {
        alert("Failed to create account");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="create-container">
      <div className="create-left">
        <h2>Welcome to CampusEats!</h2>
        <p>Create your account to order your favorite food!</p>
        <img
          src="../src/assets/Images/create-account.jpg"
          alt="Create"
          className="create-img"
        />
      </div>

      <div className="create-right">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Choose a Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Choose a Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Create Account</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
