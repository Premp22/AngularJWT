import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  login(email: string, password: string) {
    if (email == 'test@email.com' && password == 'password') {
      localStorage.setItem('currentuser', 'logedin');
      return true;
    }
  }
  logout() {
    localStorage.removeItem('currentuser');
  }
}
