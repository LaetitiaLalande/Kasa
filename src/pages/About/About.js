import React from "react";
import bgAbout from "../../assets/images/bgAbout.png";
import Banner from "../../components/Banner/Banner";
import "../About/About.scss";
import Collapses from "../../components/Collapses/Collapses";

const About = () => {
  return (
    <div className="aboutContainer">
      <Banner imageSrc={bgAbout} altText="paysage de montagne" />

      <Collapses
        title="Fiabilité"
        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes."
      />

      <Collapses
        title="Respect"
        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de pertubation du voisinage entraînera
          une exclusion de notre plateforme."
      />

      <Collapses
        title="Service"
        description="  La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de pertubation du voisinage entraînera
          une exclusion de notre plateforme."
      />

      <Collapses
        title="Sécurité"
        description="  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes."
      />
    </div>
  );
};

export default About;
