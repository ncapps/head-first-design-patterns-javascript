import WeatherData from "./weather-data";
import CurrentConditionDisplay from "./current-condition-display";
import StatisticsDisplay from "./statistics-display";
import ForecastDisplay from "./forecast-display";
import HeatIndexDisplay from "./heat-index-display";

let weatherData = new WeatherData();
let currentConditions = new CurrentConditionDisplay(weatherData);
let statisticsDisplay = new StatisticsDisplay(weatherData);
let forecastDisplay = new ForecastDisplay(weatherData);
let heatIndexDisplay = new HeatIndexDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);
