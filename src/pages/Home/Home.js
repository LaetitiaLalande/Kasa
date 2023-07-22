import React from "react";
import Banner from "../../components/Banner/Banner";
import bgHome from "../../assets/images/bgHome.png";
import "../Home/Home.scss";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  return (
    <div className="homeContainer">
      <Banner
        imageSrc={bgHome}
        altText="falaise en bord de mer"
        title={
          <h1>
            Chez vous, <span>partout et ailleurs</span>
          </h1>
        }
      />
      <Cards />
    </div>
  );
};

export default Home;
