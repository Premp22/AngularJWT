import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _router: Router,
    private authservice: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });
  showMgs: string = '';
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  loginUser() {
    console.log(this.loginForm.value);
    if (
      this.authservice.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      )
    ) {
      console.log('success');
      this._router.navigate(['../users/register']);
    } else {
      this._router.navigate(['login']);
      this.showMgs = 'invalid email or password';
    }
  }
}
