import React from 'react';
import './footer.css';
import lotus from '../../../public/lotus.png'
import github from '../../../public/icons/github.png'
import linkedin from '../../../public/icons/linkedin.png'
import facebook from '../../../public/icons/facebook-app-symbol.png'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerNav">
          <Link to={`/`}>
          <img src={lotus} alt="logo" className="logo" />
          </Link>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Community</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="borderLine" />
        <div className="footerLast">
          <div className="footerText">
            <p>
              Copyright © 2023 Harmony, All rights reserved. Powered
              by BUG SLAYERS.
            </p>
          </div>
          <div className="socialIcons">
            <button>
              <img src={github} alt="" />
            </button>
            <button>
              <img src={linkedin} alt="" />
            </button>
            <button>
              <img src={facebook} alt="" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
