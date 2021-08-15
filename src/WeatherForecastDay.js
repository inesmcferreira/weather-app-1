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


return (
    <div>
     <div className="weatherForecast-day">{day()}</div>
             ICON
           <div className="weatherForecast-temp">
          <span className="weatherForecast-temp-max">{maxTemp()} | </span> 
          <span className="weatherForecast-temp-min">{minTemp()}  </span>
           </div> 
           </div>
)
}