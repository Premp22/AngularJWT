import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  saveuser(data: any) {
    return this.http.post('https://api-task-rest.herokuapp.com/users', data);
  }
}
