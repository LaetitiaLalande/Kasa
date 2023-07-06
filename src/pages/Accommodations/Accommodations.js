import React from "react";
import Collapses from "../../components/Collapses/Collapses";
import "./Accommodations.scss";

const Accommodations = () => {
  return (
    <div className="accommodationContainer">
      <img src="" alt="" />
      <div className="titleContainer">
        <div className="title">
          <h2>fff</h2>
          <p>sous titre</p>
        </div>
        <div className="host">
          <h2>Host</h2>
        </div>
      </div>
      <div className="infos">
        <h2>tags</h2>
        <h2>rates</h2>
      </div>
      <div className="Descritpion">
        <Collapses title="description">
          <p></p>
        </Collapses>
        <Collapses title="Equipements">
          <ul>
            <li></li>
            <li></li>
          </ul>
        </Collapses>
      </div>
    </div>
  );
};

export default Accommodations;
