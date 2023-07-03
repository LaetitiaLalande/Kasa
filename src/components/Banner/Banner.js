import React from "react";
import "../Banner/Banner.scss";

const Banner = (infoBanner) => {
  return (
    <div className="bannerContainer">
      <img src={infoBanner.imageSrc} alt={infoBanner.altText} />
      <h1>{infoBanner.title}</h1>
    </div>
  );
};

export default Banner;
