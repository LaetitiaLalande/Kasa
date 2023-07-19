import React from "react";
import "../Rate/Rate.scss";
import iconStar from "../../assets/images/iconStar.png";
import iconStarGrey from "../../assets/images/iconStarGrey.png";

const Rate = ({ stars }) => {
  const star = [];

  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      star.push(
        <img key={i} src={iconStar} alt="icone Etoile" className="iconStar" />
      );
    } else {
      star.push(
        <img
          key={i}
          src={iconStarGrey}
          alt="icone Etoile grise"
          className="iconStar"
        />
      );
    }
  }

  return <div className="rateContainer">{star}</div>;
};

export default Rate;
