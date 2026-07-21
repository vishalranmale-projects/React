import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./Style.css";
export default function WeatherApp() {
  let [Data, setData] = useState({});
  function initialDetails() {
    setData({
      temp: 28.6,
      tempMin: 28.6,
      tempMax: 28.6,
      humidity: 63,
      feelsLike: 30.79,
      weather: "broken clouds",
      cityName: "Nashik",
      image_URL:
        "https://api.unsplash.com/search/photos?page=1&query=Nashik&client_id=wNjelqrMa8-7rd2qIqYPC_tYMs6u9anfjOoeSgxCEOI",
    });
  }
  useEffect(initialDetails, []);
  function getWeatherData(Data) {
    console.log(Data);
    setData(Data);
  }
  return (
    <>
      <div className="appStyle">
        <h1>Weather App By Vishal</h1>
        <SearchBox getData={getWeatherData}></SearchBox>
        <InfoBox weatherData={Data}></InfoBox>
      </div>
    </>
  );
}
