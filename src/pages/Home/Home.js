import React from "react";
import Banner from "../../components/Banner/Banner";
import bgHome from "../../assets/images/bgHome.png";
import "../Home/Home.scss";

const Home = () => {
  return (
    <section className="homeContainer">
      <Banner
        imageSrc={bgHome}
        altText="falaise en bord de mer"
        title="Chez vous, et partout ailleurs"
      />
      <div className="galleryContainer">
        <div className="accomodations">hello</div>
      </div>
    </section>
  );
};

export default Home;
