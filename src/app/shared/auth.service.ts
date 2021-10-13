import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  login(username: string, password: string) {
    if (username == 'username' && password == 'password') {
      localStorage.setItem('currentuser', 'logedin');
      return true;
    }
  }
  logout() {
    localStorage.removeItem('currentuser');
  }
}
