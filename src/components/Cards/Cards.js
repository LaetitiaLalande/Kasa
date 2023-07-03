import React from "react";
import "../Cards/Cards.scss";
import data from "../../datas/data.json";

const Cards = () => {
  console.log(data);
  return (
    <li className="card">
      <img src={data.imageSrc} alt={"description" + data.descritpion} />
      <div className="tileCard">
        <h2>Titre</h2>
      </div>
    </li>
  );
};

export default Cards;
