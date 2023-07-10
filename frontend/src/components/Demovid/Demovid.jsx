import './Demovid.css';
const Demovid = () => {
  return (
    <div className=" container bodyContainer">
      <div className="bodyText">
        <h5 className='mini-heading'>QUICK MEDITATION</h5>
        <h3 className='heading'>10 Minute Mindfulness Meditation to heal and relax</h3>
      </div>
      <p className="desc" style={{marginBottom:"1rem"}}>This is highly recommended for you to relax and calm yourself before
          proceeding with any other activity on this website. It will only take
          a few minutes.</p>
      <div className="bodyVideo">
        <embed
          width="100%"
          height="345"
          src="https://www.youtube.com/embed/ZToicYcHIOU"
        />
      </div>
    </div>
  );
};

export default Demovid;
