import React from "react";
import "../Tags/Tags.scss";

const Tags = ({ tagName }) => {
  return (
    <div className="tagContainer">
      {tagName.map((tag,index) =>(
        <div key={index} className="tag"><h3>{tag}</h3></div>
      ))}
    </div>
  );
};

export default Tags;
