import Observer from "./observer";
import WeatherData from "./weather-data";

export default class HeatIndexDisplay extends Observer {
  constructor(subject) {
    super();
    this.heatIndex = 0.0;
    this.subject = subject;
    subject.registerObserver(this);
  }

  update(subject, arg) {
    if (subject instanceof WeatherData) {
      const weatherData = subject;
      const t = weatherData.getTemperature();
      const rh = weatherData.getHumidity();
      this.heatIndex =
        16.923 +
        0.185212 * t +
        5.37941 * rh -
        0.100254 * t * rh +
        0.00941695 * (t * t) +
        0.00728898 * (rh * rh) +
        0.000345372 * (t * t * rh) -
        0.000814971 * (t * rh * rh) +
        0.0000102102 * (t * t * rh * rh) -
        0.000038646 * (t * t * t) +
        0.0000291583 * (rh * rh * rh) +
        0.00000142721 * (t * t * t * rh) +
        0.000000197483 * (t * rh * rh * rh) -
        0.0000000218429 * (t * t * t * rh * rh) +
        0.000000000843296 * (t * t * rh * rh * rh) -
        0.0000000000481975 * (t * t * t * rh * rh * rh);
      this.display();
    }
  }

  display() {
    console.log(`Heat index is ${this.heatIndex}`);
  }
}
