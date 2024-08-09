// Signup.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./index.css";


function Signup() {
    const [formData, setFormData] = useState({
            user_firstname: '',
            user_email: '',
            user_phone: '',
            user_password: '',
          });
          const navigate = useNavigate()
        
          const [showPassword, setShowPassword] = useState(false);
        
          const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          };
        
        
          const handleSubmit = (e) => {
            e.preventDefault();
            const payload = {
              ...formData,
              user_lastname: 'Doe',
              user_city: 'Hyderabad',
              user_zipcode: '500072',
            };
            localStorage.setItem('userInfo', JSON.stringify(payload));
            alert('Sign Up Successful! You can now log in.');
            navigate("/login");
          };
        
          const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
          };
        
        return(
        <div className='container'>
        <section className='left-side'>
          <h1>Welcome to our community</h1>
          <p>
            Fuse helps developers to build organized and well-coded dashboards full of beautiful and rich modules. Join us and start building your application today.
          </p>
        
          <p className='people'>👨🏻‍💼</p>
            <p>More than 17k people joined us, it's your turn</p>
          
        </section>
        <section className='right-side'>
          <h1>Sign up</h1>
          <p>Already have an account? <Link to="/login" className='signin'>Sign In</Link></p>
          <form onSubmit={handleSubmit}>
            <label htmlFor='fname'>Full name*</label>
            <input
              type="text"
              name="user_firstname"
              placeholder="First Name"
              value={formData.user_firstname}
              onChange={handleChange}
              id="fname"
              required
              autoComplete="given-name" 
            />
            <label htmlFor='email'>Email address*</label>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              value={formData.user_email}
              onChange={handleChange}
              id="email"
              required
              autoComplete="email"
            />
            <label htmlFor='password'>Password*</label>
            <div className="password-container"  id="password">
              <input
                type={showPassword ? "text" : "password"}
                name="user_password"
                placeholder="Password"
                value={formData.user_password}
                id="password"
                onChange={handleChange}
                required
                autoComplete='new-password'
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <label htmlFor='company'>Company</label>
            <input
              type="text"
              name="user_company"
              placeholder="Company"
              value={formData.user_company}
              id="company"
               autoComplete="organization"
              onChange={handleChange}
            />
            <div className='checkbox'>
              <input type="checkbox" id="tAc" />
              <label htmlFor="tAc">I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></label>
            </div>
            <button type="submit">Create your free account</button>
          </form>
        </section>
      </div>
    );
  }
  
  export default Signup;