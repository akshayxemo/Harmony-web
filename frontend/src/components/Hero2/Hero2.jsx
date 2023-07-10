import './Hero2.css';

const Hero2 = () => {
  return (
    <section className="hero2">
      <div className="hero2-content">
      <div className="right-content">
        <h5 className="mini-heading">WHO WE ARE</h5>
        <p className="heading">
            Mental health is <br />
            a human right, not <br />
            a privilege.
          </p>
          <p className="desc" style={{marginBottom:"1rem"}}>
          Dui imperdiet nisi dolor ligula nunc nisl
           arcu aliquam phasellus felis proin. Consectetuer
            ligula justo id ut inceptos mauris ultricies eros.
            arcu aliquam phasellus felis proin. Consectetuer
            Dui imperdiet nisi dolor ligula nunc nisl.
          </p>
          <button className="btn btn-black">See More</button>
        </div>
        <div className="right-content">
          <img src="./About.png" alt="Hero" className="hero2-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
