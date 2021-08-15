import React, {useState} from "react";
import "./WeatherDaily.css"
import axios from "axios";


export default function WeatherDaily(props){
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded){
console.log(forecast);
return (
 <div className="weatherDaily">
    <div className="row">
        <div className= "col">
            <div className="weatherForecast-day">{forecast[0].dt}</div>
             ICON
           <div className="weatherForecast-temp">
          <span className="weatherForecast-temp-max">{forecast[0].temp.max}º | </span> 
          <span className="weatherForecast-temp-min">{forecast[0].temp.min}º  </span>
           </div> 
        </div>
    </div>
</div>
);

} 
else {
     let apiKey = "ff1e427863a732542db269c9f762cfd2"
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return null
}
}


