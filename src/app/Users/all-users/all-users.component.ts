import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  constructor(private userService: UserService) {}
  users: any;
  ngOnInit(): void {
    this.getUserList();
  }
  getUserList() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      (deletedData) => {},
      (error) => {
        console.log(error);
      }
    );
    this.getUserList();
    console.log(this.getUserList());
  }
}
