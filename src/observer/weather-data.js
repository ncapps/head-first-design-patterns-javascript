import Subject from "./subject";

export default class WeatherData extends Subject {
  constructor() {
    super();
    this.temperature = null;
    this.humidity = null;
    this.pressure = null;
    this.observers = [];
    this.changed = false;
  }

  setChange() {
    this.changed = true;
  }

  registerObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const i = this.observers.indexOf(observer);
    this.observers.splice(i, 1);
  }

  notifyObservers(arg) {
    if (this.changed) {
      for (let observer of this.observers) {
        observer.update(this, arg);
      }
      this.changed = false;
    }
  }

  measurementsChanged() {
    this.setChange();
    this.notifyObservers();
  }

  setMeasurements(temperature, humidity, pressure) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  getTemperature() {
    return this.temperature;
  }

  getHumidity() {
    return this.humidity;
  }

  getPressure() {
    return this.pressure;
  }
}
