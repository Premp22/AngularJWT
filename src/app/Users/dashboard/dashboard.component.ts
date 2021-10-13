import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private _router: Router, private authservice: AuthService) {}

  ngOnInit(): void {}
  logout() {
    this.authservice.logout();
    this._router.navigate(['']);
  }
}
