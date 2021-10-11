import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(username: string, password: string) {
    if (username == 'username' && password == 'password') {
      localStorage.setItem('currentuser', 'logedin');
      return true;
    }
  }
  logout() {
    localStorage.removeItem('currentuser');
  }

  saveuser(data: any) {
    return this.http.post('https://api-task-rest.herokuapp.com/users', data);
  }
}
