import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  name = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  submit(): void {
    console.log(this.name.value);
  }
}
