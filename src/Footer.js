import React from 'react';
import logo from './assets/EffiPlan.png';
import './index.css';

function Footer() {
  return (
    <footer className="footer bg-white text-dark">

      <div className="footer-content">
        
        <div className='footerLogoMenu'>
           <div className='logoSubtitle'>

            <img src={logo} alt="EffiPlan Logo" className="footer-logo mb-3" />
            <span className='subtitle'>Become one of the millions who streamline their work and personal life with EffiPlan
            </span>
        </div>


        <div className='footerMenu'>

        {/* first */}
        <div className='first'>
            <h5 className='footerTitle'>Features</h5>
            <ul className='footerUl'>
                <li>How It Works</li>
                <li>Pricing</li>
                <li>Templates</li>
            </ul>
        </div>

        {/* second */}
        <div className='second'>
        <h5 className='footerTitle'>Resources</h5>
            <ul className='footerUl'>
                <li>Download Apps</li>
                <li>Help Center</li>
                <li>Integrations</li>
                <li>Status</li>
            </ul>
        </div>

        {/* third */}
        <div className='third'>
        <h5 className='footerTitle'>Company</h5>
            <ul className='footerUl'>
                <li>About Us</li>
                <li>Careers</li>
                <li>Inspiration</li>
            </ul>
        </div>



        </div>  
        </div>
       


        <div className='footerLicence'>
            <p>&copy; 2024 EffiPlan. All rights reserved.</p>      
        </div>
      
      </div>
      
    </footer>
  );
}

export default Footer;
