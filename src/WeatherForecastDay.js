import React from "react";

export default function WeatherForecastDay(props){
    function maxTemp(){
        let temperature = Math.round(props.data.temp.max)
        return `${temperature}º`;
    }
 function minTemp(){
        let temperature = Math.round(props.data.temp.min)
        return `${temperature}º`;
    }

    
    function day(){
        let date = new Date(props.data.dt*1000);
        let day= date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

console.log(props);
return (
    <div>
     <div className="weatherForecast-day">{day()}</div>
      <img
              src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
              className="fas fa-sun day-icon"
            ></img>      
     <div className="weatherForecast-temp">
          <span className="weatherForecast-temp-max">{maxTemp()} | </span> 
          <span className="weatherForecast-temp-min">{minTemp()}  </span>
           </div> 
           </div>
)
}