import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weatherData: any = {};
  location: any = {};
  current: any = {};
  condition: any = {};
  forecastday: any[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.weatherService
      .getWeather()
      .then((weather) => {
        console.log('WeatherComponent ~ weather', weather);
        this.weatherData = weather;
        this.location = this.weatherData.location;
        this.current = this.weatherData.current;
        this.condition = this.current.condition;
        this.forecastday = this.weatherData.forecast.forecastday;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
