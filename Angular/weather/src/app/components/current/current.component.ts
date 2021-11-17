import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss'],
})
export class CurrentComponent implements OnInit {
  @Input() current: any = {};

  constructor() {}

  ngOnInit(): void {}
}
