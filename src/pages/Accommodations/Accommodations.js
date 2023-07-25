import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Collapses from "../../components/Collapses/Collapses";
import "../Accommodations/Accommodations.scss";
import Carousel from "../../components/Carousel/Carousel";
import Tags from "../../components/Tags/Tags";
import Rate from "../../components/Rate/Rate";
import Host from "../../components/Host/Host";

const Accommodations = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`../cardList.json`)
      .then((response) => response.json())
      .then((datas) => {
        const isIdInDatas = datas.some((card) => card.id === id);
        if (isIdInDatas) {
          setData(datas);
          setLoading(false);
        } else {
          navigate("*");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
        setLoading(false);
      });
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="loadingContainer">
        <p>Chargement en cours...</p>
      </div>
    );
  }

  return (
    <div className="accommodationContainer">
      {data
        .filter((card) => card.id === id)
        .map((card) => (
          <div key={card.id}>
            <Carousel
              imageSrc={card.pictures}
              altText={card.title}
              picturesLength={card.pictures.length}
            />

            <div className="infoContainer">
              <div className="headerContainer">
                <div className="titleContainer">
                  <h1>{card.title}</h1>
                  <h2>{card.location}</h2>

                  <Tags tagName={card.tags} />
                </div>

                <div className="hostContainer">
                  <Host
                    name={card.host.name}
                    imageSrc={card.host.picture}
                    alt={card.host.name}
                  />

                  <div className="rate">
                    <Rate stars={card.rating} />
                  </div>
                </div>
              </div>

              <div className="collapseContainer">
                <Collapses title="Description" description={card.description} />
                <Collapses title="Equipements" description={card.equipments} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Accommodations;
