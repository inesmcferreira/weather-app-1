import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity]= useState (props.defaultCity)
    function handleResponse(response){
        console.log(response.data)
        setWeatherData ({
            ready: true,
            temperature:Math.round(response.data.main.temp),
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].main,
            feelslike: Math.round(response.data.main.feels_like ),
            humidity: response.data.main.humidity,
            imgurl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,

        }) ;

    
}

function search(){
 const apiKey = "8b9116272680075e668b32ddcdad757a";
 console.log(props.defaultCity);
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
  event.preventDefault();
  search ()
}

function handleCityChange(event){
setCity(event.target.value);
}

    if (weatherData.ready){
return (
    <div className="wrap">
        <div className="container" >
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
                <button type="submit" className="btn gps btn-warning">
                  {" "}
                  Current Location
                </button>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
        </div>
    );
    }
     else {
       search();
   return "Loading..."
}
      
}