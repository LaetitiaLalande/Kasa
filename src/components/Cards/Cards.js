import React, { useEffect, useState } from "react";
import "../Cards/Cards.scss";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../cardList.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);

  return (
    <div className="cardContainer">
      {data.map((card) => (
        <Link
          to={`/Accomodations`}
          // to={`/Accomodations${card.id}`} renvoie vers l'id
          key={card.id}
          className="cardAccomodation"
        >
          <img src={card.cover} alt={card.title} />
          <h3>{card.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
