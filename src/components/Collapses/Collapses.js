import React, { useState } from "react";
import "../Collapses/Collapses.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapses = ({ title, children }) => {
  const [isOpenCollapse, setisOpenCollapse] = useState(false);

  const toggleCollapse = () => {
    setisOpenCollapse(!isOpenCollapse);
  };

  return (
    <div className={`collapse ${!isOpenCollapse ? "collapsed" : ""}`}>
      <div className="collapseHeader">
        <h2>{title}</h2>
        <div className="fa-chevron-up" onClick={toggleCollapse}>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </div>
      {isOpenCollapse && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapses;
