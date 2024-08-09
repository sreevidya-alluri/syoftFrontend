import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css"

function Login() {
  const [formData, setFormData] = useState({ user_email: '', user_password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('userInfo'));

    if (storedUser && storedUser.user_email === formData.user_email && storedUser.user_password === formData.user_password) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <h1>Login</h1>
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        value={formData.user_email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="user_password"
        placeholder="Password"
        value={formData.user_password}
        onChange={handleChange}
        required
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
