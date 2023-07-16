import React from "react";
import Banner from "../../components/Banner/Banner";
import bgHome from "../../assets/images/bgHome.png";
import "../Home/Home.scss";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  return (
    <section className="homeContainer">
      <Banner
        imageSrc={bgHome}
        altText="falaise en bord de mer"
        title="Chez vous, 
        et partout ailleurs"
      />
      <Cards />
    </section>
  );
};

export default Home;
