import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = ({ handleLogin, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

 //to update formData state on input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to API
      const response = await axios.post('https://reqres.in/api/login', formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Store authentication token and update login state
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('isLoggedIn', 'true'); //Set isLoggedIn flag in localStorage
      setIsLoggedIn(true);// Update state in parent component
      alert("Login Successful");
      handleLogin(); 
      navigate("/home"); // Navigate to the home page

    } catch (error) {
      console.error(error);
      alert("Login failed!");
    }
  };
// Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/home');// Redirect to home page if logged in
    }
  }, [navigate]);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <div className="form-group1">
          <label>Email</label>
          <input  type="email"  placeholder="Email" required  name="email" value={formData.email} onChange={handleInputChange} className="login-input"/>
        </div>
        <div className="form-group1">
          <label>Password</label>
          <input type="password" placeholder="Password" required name="password" value={formData.password} onChange={handleInputChange} className="login-input"/>
        </div>
        <button type="submit" className="login-button">Login</button> 
      </form>
    </div>
  );
};

export default Login;
