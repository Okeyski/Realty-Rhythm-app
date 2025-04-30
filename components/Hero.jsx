import PropertySearchForm from "./PropertySearchForm";
import backImage from "@/assets/images/back-image.jpg";

const Hero = () => {
  return (
    <section className="hero-section"
    >
      <div className="container max-w-7xl mx-auto my-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center z-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Smart Living Starts Now
          </h1>
          <p className="my-4 text-xl text-white">
            Find the space that fits your rhythm.
          </p>
        </div>
        <PropertySearchForm />
      </div>
    </section>
  );
};

export default Hero;
