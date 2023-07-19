import React from "react";
import "../Banner/Banner.scss";

const Banner = ({imageSrc, altText, title}) => {
  return (
    <div className="bannerContainer">
      <img src={imageSrc} alt={altText} />
      <div className="titleBanner">
      <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
