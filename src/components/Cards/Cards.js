import React, { useEffect, useState } from "react";
import "../Cards/Cards.scss";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const delay = 5000;
    // setTimeout(() => {
    fetch("../cardList.json")
      .then((response) => response.json())
      .then((datas) => {
        setData(datas);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
        setLoading(false);
      });
    // }, delay);
  }, []);

  if (loading) {
    return (
      <div className="loadingContainer">
        <div className="spinner" />
      </div>
    );
  }

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
