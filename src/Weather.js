import React, {useState} from "react";
import FormatedDate from "./FormatedDate";
import axios from "axios";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response){
        console.log(response.data)
        setWeatherData ({
            ready: true,
            temperature:response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].main,
            feelslike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            imgurl: "http://openweathermap.org/img/wn/02d@2x.png"

        }) ;

    
}

    if (weatherData.ready){
return (
    <div className="wrap">
        <div className="container">
          <form id="formulario">
            <div className="row mb-4 mt-4">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Location"
                />
              </div>
              <div className="col-6">
                <button type="submit" className="btn btn-warning">
                  Search
                </button>
                <button type="submit" className="btn gps btn-warning">
                  {" "}
                  Current Location
                </button>
              </div>
            </div>
          </form>
          <div className="box">
            <h1>{weatherData.city}</h1>
            <div className="clearfix>">
              <div className="float-left">
                <strong>{Math.round(weatherData.temperature)}</strong>
                <span>
                  <small>ºC</small>
                </span>
              </div>
            </div>
            <h2>
              SAT
              <br />
              <FormatedDate date={weatherData.date} /> <br />
              16:20
            </h2>
          </div>
          <div className="box1">
            <br />
            <img
              src={weatherData.imgurl}
              className="fas fa-sun sun-icon"
            ></img>
            <p></p>
            <strong>{weatherData.description}</strong>
            <p></p>
            Feels like:
            <span> {weatherData.feelslike}º</span>
            <br />
            Humidity:
            <span> {weatherData.humidity}%</span>
            <br />
            Wind:
            <span> {weatherData.wind} Km/H</span>
          </div>
          <div className="weather-forecast"></div>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                London
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Paris
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                New York
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sydney
              </a>
            </li>
          </ul>
        </div>
        <hr />
        </div>
    );
    }

    else{
 const apiKey = "8b9116272680075e668b32ddcdad757a";
 console.log(props.defaultCity)
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
}
   
    
}