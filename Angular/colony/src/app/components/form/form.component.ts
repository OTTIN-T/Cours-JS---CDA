import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/shared/models/student';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  student: Student = {
    id: '',
    firstName: '',
    lastName: '',
    gender: [],
    phone: '',
    address: '',
    city: '',
    state: '',
    picture: '',
  };

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    picture: ['', Validators.required],
    agreement: [false, Validators.required],
  });

  states: any[] = [
    { value: 'France' },
    { value: 'Belgique' },
    { value: 'Allemagne' },
    { value: 'Italie' },
  ];

  genders: any[] = [
    { value: 'Masculin' },
    { value: 'Féminin' },
    { value: 'Autre' },
  ];

  id: string = '';

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute
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

  onSubmit(): void {
    if (this.id) {
      this.httpService
        .putStudent(this.student)
        .then(() => this.router.navigate(['/students/', this.id]))
        .catch((error) => console.log(error));
    }
    if (!this.id) {
      this.httpService
        .postStudent(this.userForm.value)
        .then(() => this.router.navigate(['/home']))
        .catch((error) => console.log(error));
    }
  }

  getStudent(id: string): void {
    this.httpService
      .getStudent(id)
      .then((student) => {
        console.log('FormComponent ~ student', student);
        this.userForm.patchValue(student);
      })
      .catch((error) => console.log(error));
  }
}
