import React from "react";
import Banner from "../../components/Banner/Banner";
import bgHome from "../../assets/images/bgHome.png";
import "../Home/Home.scss";
import Cards from "../../components/Cards/Cards";
import data from "../../datas/data.json";

const Home = () => {
  console.log(data);
  return (
    <section className="homeContainer">
      <Banner
        imageSrc={bgHome}
        altText="falaise en bord de mer"
        title="Chez vous, et partout ailleurs"
      />
      <div className="galleryContainer">
        <a href="#" className="accomodations">
          <Cards />
        </a>
      </div>
    </section>
  );
};

export default Home;
