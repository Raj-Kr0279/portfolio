import { useEffect } from "react";
import profImg from "../.././assets/images/prf.png";

const Hero = () => {
  return (
    <>
      <div className="hero flex justify-center items-center h-screen">
        <div className="hero-inner flex justify-around items-center">
          <div className="text content flex-col flex gap-5">
            <h4 className="font-light	">Hi, I'm Rajendra</h4>
            <p className="text-4xl">Exploring and learning the Web</p>
            <span>Get in touch</span>
          </div>
          <img src={profImg} alt="" className="w-100" />
        </div>
      </div>
    </>
  );
};

export default Hero;
