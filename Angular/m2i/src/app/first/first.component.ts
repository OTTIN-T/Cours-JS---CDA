import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name: string;
  age: number = 19;
  students: Student[] = [
    new Student({ name: 'John', age: 17 }),
    new Student({ name: 'Paul', age: 25 }),
    new Student({ name: 'Ringo', age: 30 }),
    new Student({ age: 20 }),
    new Student({ name: 'Ringo' }),
  ];

  constructor() {
    this.name = 'John';
  }

  ngOnInit(): void {}
}
