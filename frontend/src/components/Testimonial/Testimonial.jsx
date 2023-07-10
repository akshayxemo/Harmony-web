// import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      quote: 'We have a huge community to help you share yourexperience and feelings to help and to help others as well as to seek help and comfort from other have faced a simila seek help and comfort from other people who have faced a similar situatio might have faced a similar situation. You can do it comfort from other people who ANONYMOUSLY! ',
      image: 'testproff.png',
      background: 'feedback.png',
    },
    {
      id: 2,
      name: 'JMessi',
      quote: 'We have a huge community to help you share yourexperience and feelings to help and to help others as well as to seek help and comfort from other have faced a simila seek help and comfort from other people who have faced a similar situatio might have faced a similar situation.',
      image: 'testproff.png',
      background: 'feedback.png',
    },
    {
        id: 3,
        name: 'Ronaldo',
        quote: 'We have a huge community to help you share yourexperience and feelings to help and to help others as well as to seek help and comfort from other have faced a simila seek help and comfort from other people who have faced a similar situatio might have faced a similar situation. You can do it comfort from other people who ANONYMOUSLY!',
        image: 'testproff.png',
        background: 'feedback.png',
      },
    // Add more testimonials here...
  

  {
    id: 4,
    name: 'Jane Smith',
    quote: 'We have a huge community to help you share yourexperience and feelings to help and to help others as well as to seek help and comfort from other have faced a simila seek help and comfort from other people who have faced a similar situatio might have faced a similar situation.',
    image: 'testproff.png',
    background: 'feedback.png',
  },
];
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  return (
    <div className="container-lg testimonial-container" id='community'>
        <div className="container center-flex-column" style={{padding:"100px 0"}}>
        <h2 className="mini-heading">WE ALL ARE HERE</h2>
        <p className="heading heading-font">Join Our Community & Share <br /> Your Words.<br/>
        <button className="btn btn-orange" style={{marginTop:"1.5rem"}}>Lets Explore</button></p>
        </div>
      <Slider {...settings}>
        {testimonials.map(testimonial => (
                <div key={testimonial.id} className="testimonial-slide">
                    <div className="testimonial-content">
                        <div className="testimonial-background" style={{ backgroundImage: `url(${testimonial.background})` }}></div>
                        <div className="testimonial-box">
                            <div className="testimonial-info">
                                <div className="testimonial-icon">
                                <img src='testicon.png' alt="Icon" className='testimonial-quote-icon'/>
                                </div>
                                <div className="testimonial-text">
                                <div className="testimonial-title">What They Say</div>
                                </div>
                            </div>
                            <hr className="testimonial-divider" />
                            <div className="testimonial-description desc">{testimonial.quote}</div>
                            <div className="testimonial-avatar">
                                <img src={testimonial.image} alt="Avatar" />
                                <div className="testimonial-name">{testimonial.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
        ))}
      </Slider>
    </div>
    
  );
};

export default Testimonial;
