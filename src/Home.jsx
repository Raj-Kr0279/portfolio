import React from "react";
import "../src/App.css";
import Header from "../src/components/Header/Header";
import Hero from "../src/components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import codeImg from "./assets/images/code.png";
import Projects from "./Projects";
// import ".././../App.css";

function Home() {
  return (
    <>
      <Header />
      <div className="wrapper font-black dark:bg-black dark:text-white transition-all flex justify-center">
        <div className="container">
          <Hero />
          <section className="skill h-screen columns md:columns-2 mx-auto mt-8 flex justify-between items-center">
            <img src={codeImg} alt="" className="w-100" />
            <div className="skill-content w-[60%]">
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
          </section>
          <Projects />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
