import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition-day',
  templateUrl: './condition-day.component.html',
  styleUrls: ['./condition-day.component.scss'],
})
export class ConditionDayComponent implements OnInit {
  @Input() condition: any = {};
  constructor() {}

  ngOnInit(): void {}
}
