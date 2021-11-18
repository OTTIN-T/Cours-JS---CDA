import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-reactive',
  templateUrl: './add-reactive.component.html',
  styleUrls: ['./add-reactive.component.scss'],
})
export class AddReactiveComponent implements OnInit {
  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['', Validators.email],
    country: ['', Validators.required],
    gender: [''],
    agreement: [false, Validators.required],
  });

  countrys: any[] = [
    { value: 'france', viewValue: 'France' },
    { value: 'belgium', viewValue: 'Belgique' },
    { value: 'germany', viewValue: 'Allemagne' },
    { value: 'italy', viewValue: 'Italie' },
  ];

  genders: any[] = [
    { value: 'male', viewValue: 'Masculin' },
    { value: 'female', viewValue: 'Féminin' },
    { value: 'other', viewValue: 'Autres' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit(): void {
    console.log(this.userForm.value);
  }
}
