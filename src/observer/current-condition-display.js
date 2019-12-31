import Observer from "./observer";
import WeatherData from "./weather-data";

export default class CurrentConditionDisplay extends Observer {
  constructor(subject) {
    super();
    this.temperature = null;
    this.humidity = null;
    this.subject = subject;
    subject.registerObserver(this);
  }

  update(subject, arg) {
    if (subject instanceof WeatherData) {
      const weatherData = subject;
      this.temperature = weatherData.getTemperature();
      this.humidity = weatherData.getHumidity();
      this.display();
    }
  }

  display() {
    console.log(
      `Current conditions: ${this.temperature} F degrees and ${this.humidity}% humidity`
    );
  }
}
