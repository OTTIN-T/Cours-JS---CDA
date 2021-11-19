import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/shared/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userForm = this.fb.group({
    email: [''],
    pwd: [''],
  });

  constructor(
    private authService: AuthentificationService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService
      .loginUser(this.userForm.value)
      .then(() => {
        this.router.navigate(['/users']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
