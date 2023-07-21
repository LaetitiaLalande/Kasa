import React, { useState } from "react";
import "../Carousel/Carousel.scss";
import vectorLeft from "../../assets/images/vectorLeft.svg";
import vectorRight from "../../assets/images/vectorRight.svg";

const Carousel = ({ picturesLength, imageSrc, altText }) => {
  const [picture, setPicture] = useState(0);

  const prevPicture = () => {
    setPicture(picture === 0 ? picturesLength - 1 : picture - 1);
  };

  const nextPicture = () => {
    setPicture(picture === picturesLength - 1 ? 0 : picture + 1);
  };

  return (
    <div className="carouselContainer">
      <img
        src={vectorLeft}
        alt="chevron gauche"
        className={`fa-chevron-left ${picturesLength === 1 ? "hidden" : ""}`}
        onClick={prevPicture}
      />
      <img src={imageSrc[picture]} alt={altText} className="pictureCarousel" />
      <div className={`numberPicture ${picturesLength === 1 ? "hidden" : ""}`}>
        {picture + 1}/{picturesLength}
      </div>
      <img
        src={vectorRight}
        alt="chevron droit"
        className={`fa-chevron-right ${picturesLength === 1 ? "hidden" : ""}`}
        onClick={nextPicture}
      />
    </div>
  );
};

export default Carousel;
