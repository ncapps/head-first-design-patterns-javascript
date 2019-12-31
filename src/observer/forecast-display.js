import Observer from "./observer";
import WeatherData from "./weather-data";

export default class ForecastDisplay extends Observer {
  constructor(subject) {
    super();
    this.currentPressure = 29.92;
    this.lastPressure = null;
    this.subject = subject;
    subject.registerObserver(this);
  }

  update(subject, arg) {
    if (subject instanceof WeatherData) {
      const weatherData = subject;
      this.lastPressure = this.currentPressure;
      this.currentPressure = weatherData.getPressure();
      this.display();
    }
  }

  display() {
    if (this.currentPressure > this.lastPressure) {
      console.log("Forecast: Improving weather on the way!");
    } else if (this.currentPressure < this.lastPressure) {
      console.log("Forecast: Watch out for cooler, rainy weather");
    } else {
      console.log("Forecast: More of the same");
    }
  }
}
