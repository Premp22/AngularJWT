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
  showErrorMessage = false;
  loginUser() {
    this.authservice.loginUser(this.loginForm.value).subscribe(
      (result: any) => {
        if (result.token) {
          localStorage.setItem('token', result.token);
          this._router.navigate(['../users/register']);
        }
      },
      (error) => {
        this.showErrorMessage = true;
      }
    );
  }
}
