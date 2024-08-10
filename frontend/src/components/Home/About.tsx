import AboutImg from "@/assets/images/About.png";
import { Button } from "../ui/button";

const About = () => {
  return (
    <section>
      <div className="container flex justify-center gap-6 pb-24 pt-10">
        <div className="xl:w-[40%] lg:w-[60%] md:w-full">
          <p className="mini-heading">Who we are</p>
          <h2 className="heading">
            Mental health is a human right, not a privilege.
          </h2>
          <p className="mt-4 desc-text">
            At Harmony, we believe that mental health is a human right, not a
            privilege. We are dedicated to providing accessible, compassionate
            care through a variety of therapeutic options and a supportive
            community where individuals can share their experiences, find
            support, and uplift others. Our mission is to make mental health
            care accessible to everyone, ensuring that every individual has the
            opportunity to heal and thrive.
          </p>
          <Button className="btn">See more</Button>
        </div>
        <div className="object-cover rounded-2xl overflow-hidden max-md:hidden">
          <img src={AboutImg} alt="about-img" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default About;
