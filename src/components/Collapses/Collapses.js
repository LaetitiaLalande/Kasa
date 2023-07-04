import React, { useState } from "react";
import "../Collapses/Collapses.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapses = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`collapse ${isCollapsed ? "collapsed" : ""}`}>
      <div className="collapseHeader">
        <h2>{title}</h2>
        <div className={`fa-chevron-up ${!isCollapsed ? "rotated" : ""}`} onClick={toggleCollapse}>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </div>
      {!isCollapsed && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapses;
