import React from "react";
import "../Banner/Banner.scss";

const Banner = (props) => {
  return (
    <div className="bannerContainer">
      <img src={props.imageSrc} alt={props.altText} />
      <div className="titleBanner">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}; 

export default Banner;
