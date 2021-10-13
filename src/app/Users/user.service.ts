import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface user {
  id: Number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  adduser(data: user) {
    return this.http.post('https://api-task-rest.herokuapp.com/users', data);
  }

  getUsers(): Observable<user> {
    return this.http.get<user>('https://api-task-rest.herokuapp.com/users');
  }
  getCurrentUser(id: Number) {
    return this.http.get('https://api-task-rest.herokuapp.com/users/' + id);
  }
  updateUser(id: Number, data: user) {
    return this.http.patch(
      'https://api-task-rest.herokuapp.com/users/' + id,
      data
    );
  }

  deleteUser(id: Number) {
    return this.http.delete('https://api-task-rest.herokuapp.com/users/' + id);
  }
}
