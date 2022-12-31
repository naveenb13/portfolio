import React from "react";
import NavBar from "../components/NavBar";
import Projects from "./Projects";
import Banner from "./Banner";
import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
import Services from "./Services";
import Skills from "./Skills";


import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";

const Home = () => {

    React.useEffect(() => {
        AOS.init();
    });
    return (
      <>
        <div className="container-fluid container-fluid1">
          <NavBar />
          <Banner />
          {/* <Services /> */}
          <About />
          <Skills />
          {/* <Clients /> */}
          <Projects />
          <Contact />
          {/* <Footer /> */}
        </div>
      </>
    );
}

export default Home