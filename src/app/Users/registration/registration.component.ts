import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AllUsersComponent } from '../all-users/all-users.component';
import { UserService } from 'src/app/user.service';
import { error } from '@angular/compiler/src/util';
import { empty } from 'rxjs';
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
    id: [''],
    firstname: [''],
    lastname: [''],
    email: [''],
    password: [''],
  });
  ngOnInit(): void {}
  addUser() {
    this.userService.adduser(this.addUserForm.value).subscribe((result) => {
      console.log(result);
    });

    window.alert('user was added');
    this._router.navigate(['users/details']);
  }
}
