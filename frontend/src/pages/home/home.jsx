import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Hero2 from "../../Components/Hero2/Hero2";
import Hero3 from "../../Components/Hero3/Hero3";
import Consult  from "../../Components/Consult/Consult";
import Therapy from "../../Components/Therapy/Therapy";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Footer from "../../Components/Footer/Footer";
import Demovid from "../../Components/Demovid/demovid";
function Home() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Hero2/>
     <Demovid/>
     <Hero3/>
     <Therapy/>
     <Testimonial/> 
     <Consult/>
     <Footer/>
    </div>
  );
}

export default Home;