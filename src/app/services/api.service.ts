import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  // postUser(data: any) {
  //   return this.http.post<any>('http://localhost:3000/posts', data).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }
  addUser(data: any) {
    return this.http.post<any>('http://localhost:3000/users', data);
  }
  // getUser() {
  //   return this.http.get<any>('http://localhost:3000/posts').pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }
  getUsers() {
    return this.http.get<any>('http://localhost:3000/users');
  }
  // updateUser(data: any, id: number) {
  //   return this.http.put<any>('http://localhost:3000/posts/' + id, data).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  // deleteUser(id: number) {
  //   return this.http.delete<any>('http://localhost:3000/posts/' + id).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  deleteUser(id: number) {
    return this.http.delete<any>('http://localhost:3000/users/' + id);
  }

  findUser(email: string) {
    this.getUsers().subscribe((res) => {
      const hariu = res.find((user: any) => user.email === email);
      console.log('hariu :>> ', hariu);
    });
  }
}
