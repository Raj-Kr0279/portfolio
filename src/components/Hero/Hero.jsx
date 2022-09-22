import { useEffect } from "react";
import profImg from "../.././assets/images/prf.png";

const Hero = () => {
  return (
    <>
      <div className="hero flex justify-center items-center h-screen">
        <div className="hero-inner flex justify-around items-center flex-wrap">
          <div
            className="text content flex-col flex gap-5"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-easing="ease-in-out"
          >
            <h4 className="font-light">Hi, I'm Rajendra</h4>
            <p className="text-5xl">Exploring and learning the Web</p>
            <button className="bg-red-400 py-2 px-8 inline-block">
              <a href="" className="">
                Get in touch
              </a>
            </button>
          </div>

          <img
            src={profImg}
            alt=""
            className="w-100"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-easing="ease-in-out"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
