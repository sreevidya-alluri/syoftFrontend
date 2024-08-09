import React from 'react';
import "./index.css"

function Dashboard() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <div>
      <h1>Welcome, <span>{userInfo.user_firstname}</span> !</h1>
      <p className='details'>Here are your details</p>
      <p>Email: {userInfo.user_email}</p>
      <p>Phone: {userInfo.user_phone}</p>
      <p>City: {userInfo.user_city}</p>
      <p>Zipcode: {userInfo.user_zipcode}</p>
    </div>
  );
}

export default Dashboard;
