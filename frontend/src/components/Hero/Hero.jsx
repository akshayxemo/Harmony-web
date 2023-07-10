import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-box">
          <h1 className="mini-heading hero-title">WELCOME TO HARMONY</h1>
          <p className="hero-subtitle heading-font" style={{letterSpacing:"-2px"}}>Healing minds,<br />transforming lives.</p>
        </div>
        <Link to={`/auth/signup`} className="btn btn-orange">Get Started</Link>
      </div>
    </section>
  );
};

export default Hero;
