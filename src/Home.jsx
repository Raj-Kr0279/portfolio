import React from "react";
import "../src/App.css";
import Header from "../src/components/Header/Header";
import Hero from "../src/components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import codeImg from "./assets/images/code.png";
import Projects from "./Projects";
import Aos from "aos";
// import ".././../App.css";

function Home() {
  return (
    <>
      <Header />
      <div className="wrapper font-black dark:bg-black dark:text-white transition-all flex justify-center">
        <div className="">
          <Hero />
          <h1
            className="text-7xl font-normal uppercase text-center my-8"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-easing="ease-in-out"
          >
            What do I offer
          </h1>
          <section className="skill h-screen  w-full">
            <div className="grid grid-cols-2 mx-auto mt-8 flex-wrap place-content-center place-items-center gap-8">
              <img
                src={codeImg}
                alt=""
                className="w-100"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-easing="ease-in-out"
              />
              <div
                className="skill-content w-[60%]"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-easing="ease-in-out"
              >
                <div class="skills">
                  <div class="details">
                    <span>HTML</span>
                    <span>90%</span>
                  </div>
                  <div class="bar">
                    <div id="html-bar"></div>
                  </div>
                </div>
                <div class="skills">
                  <div class="details">
                    <span>CSS</span>
                    <span>90%</span>
                  </div>
                  <div class="bar">
                    <div id="javascript-bar"></div>
                  </div>
                </div>
                <div class="skills">
                  <div class="details">
                    <span>JavaScript</span>
                    <span>65%</span>
                  </div>
                  <div class="bar">
                    <div id="css-bar"></div>
                  </div>
                </div>
                <div class="skills">
                  <div class="details">
                    <span>Bootstrap</span>
                    <span>98%</span>
                  </div>
                  <div class="bar">
                    <div id="bootstrap-bar"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Projects />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
