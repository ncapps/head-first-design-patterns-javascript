import WeatherData from './weather-data';
import CurrentConditionDisplay from './current-condition-display';
import ForecastDisplay from './forecast-display';

let weatherData = new WeatherData();
let forecastDisplay = new ForecastDisplay(weatherData);
let currentDisplay = new CurrentConditionDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);
