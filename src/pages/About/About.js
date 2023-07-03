import React from "react";
import bgAbout from "../../assets/images/bgAbout.png";
import Banner from "../../components/Banner/Banner";
import "../About/About.scss";

const About = () => {
  return (
    <div className="aboutContainer">
      <Banner imageSrc={bgAbout} altText="paysage de montagne" title="" />
    </div>
  );
};

export default About;
