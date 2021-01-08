import React from 'react';
import { Link } from 'react-router-dom'; //Link 를 쓰려면 Router안에 있어야한다 (App.js 참고)
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link> 
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navigation;