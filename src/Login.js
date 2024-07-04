import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = ({ handleLogin, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'yash@gmail.com' && password === 'yash') {
      handleLogin();
      setIsLoggedIn(true);
      alert('Login Successful!!!')
      navigate('/home');
      
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="login-input" autoComplete="email" />
        <input  type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)}  className="login-input" />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
