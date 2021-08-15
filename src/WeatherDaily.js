import React from "react";
import "./WeatherDaily.css"
import axios from "axios";



export default function WeatherDaily(props){

    function handleResponse(response){
        console.log(response.data);
    }
    console.log(props);

    let apiKey = "8b9116272680075e668b32ddcdad757a"
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

axios.get(apiUrl).then(handleResponse);

return (
 <div className="weahterDaily">
    <div className="row">
        <div className= "col">
            <div className="weatherForecast-day">Sun</div>
             ICON
           <div className="weatherForecast-temp">
          <span className="weatherForecast-temp-max">18º | </span> 
          <span className="weatherForecast-temp-min">10º  </span>
           </div> 
        </div>
    </div>
</div>
);
}


