import './Therapy.css';
import { Link } from 'react-router-dom';

const Therapy = () => {
  return (
    <section className="therapy" id='services'>
      <div className="therapy-content">
        <h2 className="mini-heading">WHAT WE OFFER</h2>
        <p className="heading">Get therapies for all your mental <br /> healthcare needs.</p>
        <div className="therapy-catalog">
          <div className="therapy-box">
            <img src="./Audio.png" alt="Audio Therapy" className="f-box-icon"/>
            <h3 className="f-box-heading">Audio Therapy</h3>
            <p className="f-box-sub">Suspendisse potenti. Ut ipsum odio, luctus placerat vitae, Integer iaculis nisl at mauris varius tempor</p>
            <Link to={`/services/audio-therapy`} className="lexplore-btn">Let's Explore</Link>
          </div>
          <div className="therapy-box">
            <img src="./Reading.png" alt="Reading Therapy" className="f-box-icon"/>
            <h3 className="f-box-heading">Reading Therapy</h3>
            <p className="f-box-sub">Suspendisse potenti. Ut ipsum odio, luctus placerat vitae, Integer iaculis nisl at mauris varius tempor</p>
            <button className="lexplore-btn">Let's Explore</button>
          </div>
          <div className="therapy-box">
            <img src="/Meditation.png" alt="Meditation Therapy" className="f-box-icon"/>
            <h3 className="f-box-heading">Meditation</h3>
            <p className="f-box-sub">Suspendisse potenti. Ut ipsum odio, luctus placerat vitae, Integer iaculis nisl at mauris varius tempor</p>
            <button className="lexplore-btn">Let's Explore</button>
          </div>
          <div className="therapy-box">
            <img src="/Laughing.png" alt="Laughing Therapy" className="f-box-icon"/>
            <h3 className="f-box-heading">Laughing Therapy</h3>
            <p className="f-box-sub">Suspendisse potenti. Ut ipsum odio, luctus placerat vitae, Integer iaculis nisl at mauris varius tempor</p>
            <button className="lexplore-btn">Let's Explore</button>
          </div>
          <div className="therapy-box">
            <img src="/Yoga.png" alt="Yoga Therapy" className="f-box-icon"/>
            <h3 className="f-box-heading">Yoga Therapy</h3>
            <p className="f-box-sub">Suspendisse potenti. Ut ipsum odio, luctus placerat vitae, Integer iaculis nisl at mauris varius tempor</p>
            <Link to={`/services/yoga`} className="lexplore-btn">Let's Explore</Link>
          </div>
          <div className="therapy-box">
            <img src="/Others.png" alt="Other Therapy" className="f-box-icon"/>
            <h3 className="f-box-heading">Others</h3>
            <p className="f-box-sub">Suspendisse potenti. Ut ipsum odio, luctus placerat vitae, Integer iaculis nisl at mauris varius tempor</p>
            <button className="lexplore-btn">Let's Explore</button>
          </div>
          {/* Add more therapy boxes here */}
        </div>
      </div>
    </section>
  );
};

export default Therapy;
