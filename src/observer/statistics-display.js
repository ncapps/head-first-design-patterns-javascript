import Observer from "./observer";
import WeatherData from "./weather-data";

export default class StatisticsDisplay extends Observer {
  constructor(subject) {
    super();
    this.maxTemp = 0.0;
    this.minTemp = 200;
    this.tempSum = 0.0;
    this.numReadings = 0;
    this.subject = subject;
    subject.registerObserver(this);
  }

  update(subject, arg) {
    if (subject instanceof WeatherData) {
      const weatherData = subject;
      const temp = weatherData.getTemperature();
      this.tempSum += temp;
      this.numReadings++;

      if (temp > this.maxTemp) {
        this.maxTemp = temp;
      }

      if (temp < this.minTemp) {
        this.minTemp = temp;
      }

      this.display();
    }
  }

  display() {
    console.log(
      `Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${
        this.maxTemp
      }/${this.minTemp}`
    );
  }
}
