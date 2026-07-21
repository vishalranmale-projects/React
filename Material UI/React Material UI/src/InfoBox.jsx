import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import "./weather.css";
export default function InfoBox({ weatherData }) {
  console.log(weatherData.image_URL + "org");
  return (
    <>
      <div className="Container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={weatherData.image_URL} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <i>
                {weatherData.cityName}&nbsp;
                {weatherData.temp <= 15 ? (
                  <AcUnitIcon />
                ) : weatherData.humidity >= 70 ? (
                  <UmbrellaIcon />
                ) : weatherData.temp >= 25 ? (
                  <SolarPowerIcon />
                ) : null}
              </i>
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <b>humidity:</b>
              {weatherData.humidity}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <b>temp:</b>
              {weatherData.temp}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <b>Max_Temp:</b>
              {weatherData.tempMax}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <b>Min_Temp:</b>
              {weatherData.tempMin}
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              The Whether Can Be describe As{" "}
              <u>
                <i>{weatherData.weather}</i>
              </u>{" "}
              And Feels Like <u>{weatherData.feelsLike}</u>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
