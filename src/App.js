import React from 'react';
import './index.css'; 
import logo from './assets/EffiPlan.png'; 
import mobImage from './assets/mob.png'; 
import tabImage from './assets/tab.png';

import Header from './Header';
import Footer from './Footer';

function App() {
  const Click = () => {
    window.alert('Hello World');
  };

  return (
    <div className="App">

    

      <div className="maincontent">
        <h1 className="headertitle">
          Bring order to your work and <br />
          life, once and for all.
        </h1>
        <h5 className="mainsubtitle">
          Make life easier for you and your team with the world's leading task <br />
          manager and to-do list app.
        </h5>
        <button className="cta" onClick={Click}>Learn more</button>
      </div>

      <div className="div1">
        <img src={mobImage} alt="Mobile image" />
        <img src={tabImage} alt="Tablet image" />
      </div>

     

    </div>
  );
}

export default App;
