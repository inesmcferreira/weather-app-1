import react from "react";

export default function FormatedDate(props){
    console.log(props.date);
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ]
    let day = days[props.date.getDay()];
    let hours =props.date.getHours();
    if (hours <10){
        hours =`0${hours}`;
    }
       

    let minutes = props.date.getMinutes();

    if (minutes < 10){
        minutes =`0${minutes}`;
    }
    return <div> 
    {day} <br />
    {hours}:{minutes}
    </div>;
}