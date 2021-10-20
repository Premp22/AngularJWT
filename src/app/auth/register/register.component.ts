import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private _router: Router,
    private formBuilder: FormBuilder
  ) {}
  addUserForm = this.formBuilder.group({
    name: ['', [Validators.required]],

    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  get name() {
    return this.addUserForm.get('name');
  }

  get email() {
    return this.addUserForm.get('email');
  }
  get password() {
    return this.addUserForm.get('password');
  }
  ngOnInit(): void {}
  showMsg: boolean = false;
  registerUser() {
    console.log(this.addUserForm.value);
    this.authService
      .registeruser(this.addUserForm.value)
      .subscribe((result) => {
        console.log(result);
        this.showMsg = true;
      });
  }
}
