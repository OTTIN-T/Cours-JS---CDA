import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
})
export class BeerComponent implements OnInit {
  @Input() beers: any[] = [];
  id: number = 0;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.getBeer(this.id);
    }
  }

  getBeer(id: number) {
    this.httpService
      .getBeer(id)
      .then((beer) => {
        this.beers = beer;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
