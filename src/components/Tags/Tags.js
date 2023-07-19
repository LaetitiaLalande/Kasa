import React from "react";
import "../Tags/Tags.scss";

const Tags = ({ name }) => {
  return (
    <div className="tag">
      <h3>{name}</h3>
    </div>
  );
};

export default Tags;
