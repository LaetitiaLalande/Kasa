import React, { useState } from "react";
import "../Collapses/Collapses.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapses = ({ description, title }) => {
  const [isOpenCollapse, setisOpenCollapse] = useState(false);

  const toggleCollapse = () => {
    setisOpenCollapse(!isOpenCollapse);
  };

  const isArray = Array.isArray(description);

  return (
    <div className="collapse">
      <div className="collapseHeader">
        <h2>{title}</h2>
        <div className={`fa-chevron-up ${isOpenCollapse ? "rotated" : ""}`}>
          <FontAwesomeIcon icon={faChevronUp} onClick={toggleCollapse} />
        </div>
      </div>
      <div className={`content ${isOpenCollapse ? "expanded" : ""}`}>
        {isArray ? (
          <ul>
            {description.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};

export default Collapses;
