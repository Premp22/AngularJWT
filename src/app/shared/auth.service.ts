import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginUser(data: any) {
    return this.http.post('https://jwttasknode.herokuapp.com/auth/login', data);
  }

  logout() {
    localStorage.removeItem('token');
  }

  registeruser(data: any) {
    return this.http.post(
      'https://jwttasknode.herokuapp.com/auth/register',
      data
    );
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
