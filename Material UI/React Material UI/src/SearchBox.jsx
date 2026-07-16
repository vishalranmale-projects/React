import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import "./searchbox.css";
export default function SearchBox({ getData }) {
  let [error, seterror] = useState("");
  async function getWhetherDetails(event) {
    event.preventDefault();
    seterror("");
    const APIKEY = "12186258b2d77fdb8c31756ec4ba3e4a";
    try {
      let whetherInfo = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${event.target.cityName.value}&appid=${APIKEY}&units=metric`,
      );
      whetherInfo = await whetherInfo.json();

      let finalData = {
        temp: whetherInfo.main.temp,
        tempMin: whetherInfo.main.temp_min,
        tempMax: whetherInfo.main.temp_max,
        humidity: whetherInfo.main.humidity,
        feelsLike: whetherInfo.main.feels_like,
        weather: whetherInfo.weather[0].description,
        cityName: whetherInfo.name,
      };
      getData(finalData);
      event.target.cityName.value = "";
    } catch (err) {
      seterror("Please Enter An Valid City Name!");
      console.log("Please Enetr An Valid City Name!");
    }
  }
  return (
    <>
      <div className="search">
        <h3>Enter An City Name</h3>
        <form onSubmit={getWhetherDetails}>
          <TextField
            name="cityName"
            id="outlined-basic"
            label="cityName"
            variant="outlined"
            placeholder="Enter An City Name"
            required
          />
          <br></br>
          <br></br>
          <Button type="submit" variant="contained" disableElevation>
            Submit
          </Button>
        </form>
        {error !== "" ? <p style={{ color: "red" }}>{error}</p> : null}
      </div>
    </>
  );
}
