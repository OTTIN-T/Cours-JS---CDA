import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/models/student';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  students: any[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.httpService
      .getStudents()
      .then((students: any[]) => {
        this.students = students;
        console.log('ListComponent ~ this.students', this.students);
      })
      .catch((error) => console.log(error));
  }
}
