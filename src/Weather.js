import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherDaily from "./WeatherDaily";
import axios from "axios";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      feelslike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      imgurl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "ff1e427863a732542db269c9f762cfd2";
    console.log(props.defaultCity);
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function cities(city) {
    console.log(city)
    setCity({city:city})
    const apiKey = "ff1e427863a732542db269c9f762cfd2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function current(position) {
    const apiKey = "ff1e427863a732542db269c9f762cfd2";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
    let apiCity = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(`${apiCity}&appid=${apiKey}`).then(handleResponse);
    console.log(lat);
  }

  function showCurrent() {
    //console.log(navigator.geolocation.getCurrentPosition())
    navigator.geolocation.getCurrentPosition(current);
  }

  if (weatherData.ready) {
    return (
      <div className="wrap">
        <div className="container">
          <form id="formulario" onSubmit={handleSubmit}>
            <div className="row mb-4 mt-4">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Location"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-6">
                <button type="submit" className="btn btn-warning">
                  Search
                </button>
                <button
                  type="submit"
                  className="btn gps btn-warning"
                  onClick={showCurrent}
                >
                  {" "}
                  Current Location
                </button>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherDaily coordinates={weatherData.coordinates} />
         
          <div className="weather-forecast">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" onClick={cities.bind(this,"London")}>
            London
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={cities.bind(this,"Paris")}>
            Paris
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={cities.bind(this,"Tokyo")}>
            Tokyo
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={cities.bind(this,"Sydney")}>
            Sydney
          </a>
        </li>
      </ul>
    </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
