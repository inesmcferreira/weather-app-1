import React, {useState} from "react";
import axios from "axios";

export default function Weather(){
    const  [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
    function handleResponse(response){
    setTemperature(response.data.main.temp);
    setReady (true);
}

    if (ready){
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
            <h1>Viseu</h1>
            <div className="clearfix>">
              <div className="float-left">
                <strong>9</strong>
                <span>
                  <small>ºC</small>
                </span>
              </div>
            </div>
            <h2>
              SAT
              <br />
              13/03 <br />
              16:20
            </h2>
          </div>
          <div className="box1">
            <br />
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              className="fas fa-sun sun-icon"
            ></img>
            <p></p>
            <strong>Cloudy</strong>
            <p></p>
            Feels like:
            <span>7º</span>
            <br />
            Precipitation:
            <span>0%</span>
            <br />
            Wind:
            <span>9 Km/H</span>
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
 const apiKey = "73cf2156fca1d8b078d75a48a4ddf469";
    let city = "London"
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(upiUrl).then(handleResponse);

    return "Loading..."
}
   
    
}