import React from "react";

function FeatureBox(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} />
      </div>
      <div className="s-b-text">
        <h2 className="hell">{props.title}</h2>
        <p>{props.para}</p>
      </div>
    </div>
  );
}

export default FeatureBox;
