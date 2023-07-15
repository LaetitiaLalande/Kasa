import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import "../Rate/Rate.scss";

const Rate = ({ stars }) => {
  const star = [];

  for (let i = 0; i < stars; i++) {
    star.push(
      <span key={i}>
        <FontAwesomeIcon icon={faStar} />
      </span>
    );
  }

  return <div className="rateContainer">{star}</div>;
};

export default Rate;
