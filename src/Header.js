import React from 'react';
import logo from './assets/EffiPlan.png';
import './index.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="#homepage">
          <img src={logo} alt="EffiPlan Logo" /> 
        </a>
      </div>

      <nav>
        <ul>
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li> 
          <li>Pricing</li>
        </ul>
      </nav>

      <div className="buttons">
        <button className="logIn">Log in</button>
        <button className="cta">Start for free</button>
      </div>
    </header>
  );
}

export default Header;
