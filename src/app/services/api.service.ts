import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  addUser(data: any) {
    return this.http.post<any>('http://localhost:3000/users', data);
  }

  getUsers() {
    return this.http.get<any>('http://localhost:3000/users');
  }

  deleteUser(id: number) {
    return this.http.delete<any>('http://localhost:3000/users/' + id);
  }
}