import WeatherData from '../src/observer/weather-data';
import CurrentConditionDisplay from '../src/observer/current-condition-display';
import StatisticsDisplay from '../src/observer/statistics-display';
import ForecastDisplay from '../src/observer/forecast-display';
import HeatIndexDisplay from '../src/observer/heat-index-display';

let logs = '';
const storeLog = (log) => {
  logs += log;
  return logs;
};
console.log = jest.fn(storeLog);

describe('weather station', () => {
  it('current condition', () => {
    const weatherData = new WeatherData();
    const currentConditions = new CurrentConditionDisplay(weatherData);
    logs = '';
    weatherData.setMeasurements(80, 65, 30.4);
    expect(logs).toBe('Current conditions: 80 F degrees and 65% humidity');
    logs = '';
    weatherData.setMeasurements(82, 70, 29.2);
    expect(logs).toBe('Current conditions: 82 F degrees and 70% humidity');
    logs = '';
    weatherData.setMeasurements(78, 90, 29.2);
    expect(logs).toBe('Current conditions: 78 F degrees and 90% humidity');
  });

  it('statistics', () => {
    const weatherData = new WeatherData();
    const statisticsDisplay = new StatisticsDisplay(weatherData);
    logs = '';
    weatherData.setMeasurements(80, 65, 30.4);
    expect(logs).toBe('Avg/Max/Min temperature = 80/80/80');
    logs = '';
    weatherData.setMeasurements(82, 70, 29.2);
    expect(logs).toBe('Avg/Max/Min temperature = 81/82/80');
    logs = '';
    weatherData.setMeasurements(78, 90, 29.2);
    expect(logs).toBe('Avg/Max/Min temperature = 80/82/78');
  });

  it('forecast', () => {
    const weatherData = new WeatherData();
    const forecastDisplay = new ForecastDisplay(weatherData);
    logs = '';
    weatherData.setMeasurements(80, 65, 30.4);
    expect(logs).toBe('Forecast: Improving weather on the way!');
    logs = '';
    weatherData.setMeasurements(82, 70, 29.2);
    expect(logs).toBe('Forecast: Watch out for cooler, rainy weather');
    logs = '';
    weatherData.setMeasurements(78, 90, 29.2);
    expect(logs).toBe('Forecast: More of the same');
  });

  it('heat index', () => {
    const weatherData = new WeatherData();
    const heatIndexDisplay = new HeatIndexDisplay(weatherData);
    logs = '';
    weatherData.setMeasurements(80, 65, 30.4);
    expect(logs).toContain('Heat index is 82.955');
    logs = '';
    weatherData.setMeasurements(82, 70, 29.2);
    expect(logs).toContain('Heat index is 86.901');
    logs = '';
    weatherData.setMeasurements(78, 90, 29.2);
    expect(logs).toContain('Heat index is 83.649');
  });

  it('observers', () => {
    const weatherData = new WeatherData();
    const currentConditions = new CurrentConditionDisplay(weatherData);
    const statisticsDisplay = new StatisticsDisplay(weatherData);
    const forecastDisplay = new ForecastDisplay(weatherData);
    const heatIndexDisplay = new HeatIndexDisplay(weatherData);
    logs = '';
    weatherData.setMeasurements(80, 65, 30.4);
    expect(logs).toContain('Current conditions: ');
    expect(logs).toContain('Avg/Max/Min temperature = ');
    expect(logs).toContain('Forecast: ');
    expect(logs).toContain('Heat index is ');
  });
});
