import React, { useEffect, useState } from "react";
import "../Cards/Cards.scss";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../cardList.json")
      .then((response) => response.json())
      .then((datas) => {
        setData(datas);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);

  return (
    <div className="cardContainer">
      {data.map((card) => (
        <Link
          to={`/Accommodations/${card.id}`}
          key={card.id}
          className="cardAccommodation"
        >
          <img src={card.cover} alt={card.title} />
          <div className="titleCard">
            <h3>{card.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
