import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        
            city: "Delhi",
            feelslike: 31.43,
            temp: 33.05,
            tempMin: 33.05,
            tempMax: 33.05,
            humidity: 25,
            weather: "haze"
        
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
    <div style={{textAlign: "center"}}>
        <h2>Weather App by Delta</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info= {weatherInfo}/>
    </div>
    )
}