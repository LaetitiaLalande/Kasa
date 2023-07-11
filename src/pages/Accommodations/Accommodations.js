import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collapses from "../../components/Collapses/Collapses";
import "../Accommodations/Accommodations.scss";

const Accommodations = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`../cardList.json`)
      .then((response) => response.json())
      .then((datas) => {
        console.log(datas);
        setData(datas);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);

  return (
    <div className="accommodationContainer">
      {data
        .filter((card) => card.id === id)
        .map((card) => (
          <div key={card.id}>
            <div className="carousel">
              <img src={card.cover} alt={card.title} />
            </div>
            <div className="infoContainer">
              <div className="box">
                <h2>{card.title}</h2>
                <h3>{card.location}</h3>
              </div>
              <div className="box hostContainer">
                <p>{card.host.name}</p>
                <img src={card.host.picture} alt="" />
              </div>
              <span>{card.tags}</span>
              <span>{card.rating}</span>
              <Collapses title="Description">
                <p>{card.description}</p>
              </Collapses>
              <Collapses title="Equipement">
                <li>{card.equipments}</li>
              </Collapses>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Accommodations;
