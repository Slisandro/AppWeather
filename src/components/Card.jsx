import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="card">
      <div id="cardContainer">
        <Link to={`/ciudad/${id}`}>
          <h5 className="card-title">{name}</h5>
        </Link>
        <div id="closeIcon" className="row">
          <button onClick={onClose} className="btn btn-sm btn-danger">
            X
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3.5">
            <p>Min</p>
            <p>{min} °F</p>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3.5">
            <p>Max</p>
            <p>{max} °F</p>
          </div>
          <div className="col-sm-4.5 col-md-4.5 col-lg-5">
            <img
              className="iconoClima"
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
