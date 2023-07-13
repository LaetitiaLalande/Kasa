import React, { useEffect, useState } from "react";
import "../Carousel/Carousel.scss";
import { useParams } from "react-router-dom";
import vectorLeft from "../../assets/images/vectorLeft.svg";
import vectorRight from "../../assets/images/vectorRight.svg";

const Carousel = () => {
  const [picture, setPicture] = useState(0);
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`../cardList.json`)
      .then((response) => response.json())
      .then((datas) => {
        console.log(datas);
        setData(datas);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);

  const prevPicture = () => {
    setPicture(picture === 0 ? picture.length - 1 : picture - 1);
  };

  const nextPicture = () => {
    setPicture(picture === picture.length ? 0 : picture + 1);
  };

  return (
    <div className="carouselContainer">
      {data
        .filter((card) => card.id === id)
        .map((card) => (
          <div key={card.id}>
            <img
              src={vectorLeft}
              alt="chevron gauche"
              className="fa-chevron-left"
              onClick={prevPicture}
            />
            <img
              src={card.pictures[picture]}
              alt={card.title}
              className="pictureCarousel"
            />
            <img
              src={vectorRight}
              alt="chevron droit"
              className="fa-chevron-right"
              onClick={nextPicture}
            />
          </div>
        ))}
    </div>
  );
};

export default Carousel;
