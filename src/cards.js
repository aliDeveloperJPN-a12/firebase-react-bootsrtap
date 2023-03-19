import React from "react";
import "./cards.css";
function Cards(props) {
  return (
    <div>
      {/* --------------------------------------------------------- */}
      <div className="card m" style={{ width: "18rem" }}>
        <img src={props.linkpic} className="card-img-top d" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <a href={`/detail#${props.id}`} className="btn btn-primary">
            watch now
          </a>
        </div>
      </div>
      {/* --------------------------------------------------------- */}
    </div>
  );
}

export default Cards;
