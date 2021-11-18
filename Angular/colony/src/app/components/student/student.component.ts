import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/shared/models/student';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  @Input() student?: Student;
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.getStudent(this.id);
    }
  }

  getStudent(id: string): void {
    this.httpService
      .getStudent(id)
      .then((student) => {
        console.log('StudentComponent ~ student', student);
        this.student = student;
      })
      .catch((error) => console.log(error));
  }

  removeStudent(id: string): void {
    this.httpService
      .deleteStudent(id)
      .then(() => this.router.navigate(['/home']))
      .catch((error) => console.log(error));
  }
}
