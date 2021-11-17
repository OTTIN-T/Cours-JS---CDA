import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  beers: any[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers() {
    this.httpService
      .getBeers()
      .then((beer) => {
        this.beers = beer;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
