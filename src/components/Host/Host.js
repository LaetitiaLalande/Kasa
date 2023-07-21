import React from "react";
import "../Host/Host.scss"

const Host = (props) => {
  return (
    <div className="host">
      <p>{props.name}</p>
      <img src={props.imageSrc} alt={props.Alt} className="hostImage" />
    </div>
  );
};

export default Host;
