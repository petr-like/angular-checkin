import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class UserService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  login(data) {
    return this.http.post(this.url + '/users/login', data);
  }

  registration(user) {
    return this.http.post(this.url + '/api/add', user);
  }
}
