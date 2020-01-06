/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "Display" }] */

import WeatherData from './weather-data';
import CurrentConditionDisplay from './current-condition-display';
import StatisticsDisplay from './statistics-display';
import ForecastDisplay from './forecast-display';
import HeatIndexDisplay from './heat-index-display';

const weatherData = new WeatherData();
const currentConditionsDisplay = new CurrentConditionDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);
const forecastDisplay = new ForecastDisplay(weatherData);
const heatIndexDisplay = new HeatIndexDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);
