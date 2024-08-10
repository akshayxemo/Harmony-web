import About from "@/components/Home/About";
import CommunityFeature from "@/components/Home/CommunityFeature";
import FeatureVideo from "@/components/Home/FeatureVideo";
import Hero from "@/components/Home/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <FeatureVideo />
      <CommunityFeature />
    </>
  );
};

export default HomePage;
