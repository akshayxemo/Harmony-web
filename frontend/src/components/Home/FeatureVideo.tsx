const FeatureVideo = () => {
  return (
    <section>
      <div className="container py-24 text-center flex flex-col items-center">
        <p className="mini-heading">Quick Meditation</p>
        <h2 className="heading">
          10 Minute Mindfulness Meditation to heal and relax.
        </h2>
        <p className="mt-3 max-w-[60%] desc-text">
          This is highly recommended for you to relax and calm yourself before
          proceeding with any other activity on this website. It will only take
          a few minutes.
        </p>
        <embed
          className="max-w-[800px] aspect-video mx-auto mt-10 w-full rounded-xl"
          src="https://www.youtube.com/embed/ZToicYcHIOU"
        />
      </div>
    </section>
  );
};

export default FeatureVideo;
