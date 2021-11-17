import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          'http://api.weatherapi.com/v1/forecast.json?key=c3a030ab02774a83a7f143925211711&q=Pessac&days=3&aqi=no&alerts=no'
        )
        .subscribe({
          next: (weather) => resolve(weather),
          error: () => reject,
        });
    });
  }
}
