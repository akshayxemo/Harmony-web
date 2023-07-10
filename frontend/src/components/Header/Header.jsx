import { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import logo from '../../../public/logo.png'
import loginIcon from '../../../public/loginicon.png'

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <nav className="navbar">
      <Link to={`/`}><img src={logo} alt="logo" className="logo" /></Link>
      <a
        href="#"
        className={`toggle-button ${showMediaIcons ? 'active' : ''}`}
        onClick={() => setShowMediaIcons(!showMediaIcons)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={`h-menu ${showMediaIcons ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#community'>Community</a>
          </li>
          <li>
            <Link to={`/`} >Contact</Link>
          </li>
          <li>
          <a href='https://www.practo.com/counselling-psychology' className="appointment-btn">
              <div className="appointment-btn-left">
                <FontAwesomeIcon icon={faCalendar} className="calendar-icon" />
              </div>
              <div className="appointment-btn-right"><span className='book'>Book an</span> <br /> Appointment</div>
            </a>
          </li>
          <li>
            <img
              src={loginIcon}
              alt="logo"
              className="profile-avatar"
              onClick={togglePopUp}
            />
            
          </li>
        </ul>
        {
          showPopUp && <div className="pop-up">
          <Link to={`/auth/login`} className='btn btn-orange'>Login</Link>
          <Link to={`/auth/signup`} className='btn btn-lime-blue'>Sign Up</Link>
        </div>
        }
      </div>
    </nav>
  );
};

export default Header;
