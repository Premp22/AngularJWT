import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-updation',
  templateUrl: './updation.component.html',
  styleUrls: ['./updation.component.css'],
})
export class UpdationComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private userService: UserService,
    private _router: Router,
    private formBuilder: FormBuilder
  ) {}
  userData: any;
  editUserForm = this.formBuilder.group({
    id: [''],
    firstname: [''],
    lastname: [''],
    email: [''],
    password: [''],
  });
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.userService
      .getCurrentUser(this.router.snapshot.params.id)
      .subscribe((result) => {
        this.userData = result;
        this.editUserForm = this.formBuilder.group({
          id: [this.userData.id],
          firstname: [this.userData.firstname],
          lastname: [this.userData.lastname],
          email: [this.userData.email],
          password: [this.userData.password],
        });
      });
  }

  editUser() {
    console.log(this.editUserForm.value);
    this.userService
      .updateUser(this.router.snapshot.params.id, this.editUserForm.value)
      .subscribe((results) => {
        console.log(results);
      });
    this._router.navigate(['users/details']);
  }
}
