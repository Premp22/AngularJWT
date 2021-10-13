import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/Users/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private userService: UserService,
    private _router: Router,
    private formBuilder: FormBuilder
  ) {}
  addUserForm = this.formBuilder.group({
    id: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  get id() {
    return this.addUserForm.get('id');
  }
  get firstname() {
    return this.addUserForm.get('firstname');
  }
  get lastname() {
    return this.addUserForm.get('lastname');
  }
  get email() {
    return this.addUserForm.get('email');
  }
  get password() {
    return this.addUserForm.get('password');
  }
  ngOnInit(): void {}
  showMsg: boolean = false;
  addUser() {
    this.userService.adduser(this.addUserForm.value).subscribe((result) => {
      console.log(result);
      this.showMsg = true;
      this._router.navigate(['users/details']);
    });
  }
}
