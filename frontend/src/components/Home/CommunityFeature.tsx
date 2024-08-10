import { Button } from "../ui/button";

const CommunityFeature = () => {
  return (
    <section className="bg-comunity-feature">
      <div className="container py-24">
        <div className="md:w-[60%] w-full">
          <h2 className="heading text-white">Share your Experience with Us</h2>
          <p className="mt-4 text-white">
            We have a huge community to help you share your experience and
            feelings to help others as well as to seek help and comfort from
            other people who might have face the similar situation. Also you can
            do it ANONYMOUSLY!
          </p>
          <Button className="mt-8 btn">Lets Explore</Button>
        </div>
      </div>
    </section>
  );
};

export default CommunityFeature;
