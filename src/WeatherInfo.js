import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="box">
        <h1>{props.data.city}</h1>
        <div className="clearfix>">
          <div className="float-left">
            <strong>{Math.round(props.data.temperature)}</strong>
            <span>
              <small>ºC</small>
            </span>
          </div>
        </div>
        <h2>
          <FormatedDate date={props.data.date} />
        </h2>
      </div>
      <div className="box1">
        <br />
        <img src={props.data.imgurl} className="fas fa-sun sun-icon"></img>
        <p></p>
        <strong>{props.data.description}</strong>
        <p></p>
        Feels like:
        <span> {props.data.feelslike}º</span>
        <br />
        Humidity:
        <span> {props.data.humidity}%</span>
        <br />
        Wind:
        <span> {props.data.wind} Km/H</span>
      </div>
    </div>
  );
}
