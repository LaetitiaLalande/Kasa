import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Collapses from "../../components/Collapses/Collapses";
import "../Accommodations/Accommodations.scss";
import Carousel from "../../components/Carousel/Carousel";
import Tags from "../../components/Tags/Tags";
import Rate from "../../components/Rate/Rate";

const Accommodations = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`../cardList.json`)
      .then((response) => response.json())
      .then((datas) => {
        const isIdInDatas = datas.some((card) => card.id === id);
        if (isIdInDatas) {
          setData(datas);
        } else {
          navigate("*");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, [id, navigate]);

  return (
    <div className="accommodationContainer">
      {data
        .filter((card) => card.id === id)
        .map((card) => (
          <div key={card.id}>
            <Carousel picturesLength={card.pictures.length} />

            <div className="infoContainer">
              <div className="headerContainer">
                <div className="titleContainer">
                  <h2>{card.title}</h2>
                  <h3>{card.location}</h3>
                  <div className="tagsContainer">
                    {card.tags.map((tag, tagKey) => (
                      <Tags key={tagKey} name={tag} />
                    ))}
                  </div>
                </div>

                <div className="hostContainer">
                  <div className="host">
                    <p>{card.host.name}</p>
                    <img
                      src={card.host.picture}
                      alt={card.host.name}
                      className="hostImage"
                    />
                  </div>
                  <div className="rate">
                    <Rate stars={card.rating} />
                  </div>
                </div>
              </div>

              <div className="collapseContainer">
                <Collapses title="Description">
                  <p>{card.description}</p>
                </Collapses>

                <Collapses title="Equipement">
                  <ul>
                    {card.equipments.map((equipment, equipmentKey) => (
                      <li key={equipmentKey}>{equipment}</li>
                    ))}
                  </ul>
                </Collapses>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Accommodations;
