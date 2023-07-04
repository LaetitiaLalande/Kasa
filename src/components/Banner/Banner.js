import React from "react";
import "../Banner/Banner.scss";

const Banner = ({imageSrc, altText, title}) => {
  return (
    <div className="bannerContainer">
      <img src={imageSrc} alt={altText} />
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;
