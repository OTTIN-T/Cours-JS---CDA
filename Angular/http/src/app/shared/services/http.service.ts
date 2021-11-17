import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getBeers(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('https://api.punkapi.com/v2/beers').subscribe({
        next: (beers) => resolve(beers),
        error: () => reject,
      });
    });
  }

  getBeer(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`https://api.punkapi.com/v2/beers/${id}`).subscribe({
        next: (beer) => resolve(beer),
        error: () => reject,
      });
    });
  }
}
