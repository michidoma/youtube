import { Injectable } from '@angular/core';
import { userInfo } from '../shared/user-info.model';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  userData: userInfo[] = [
    {
      firstName: 'Enkhjin',
      lastName: 'Oyungerel',
      username: 'eny612',
      email: 'eny612@gmail.com',
      password: 'Enkhjin1234',
    },
    {
      firstName: 'Sarnai',
      lastName: 'Borkhuu',
      username: 'rosie710',
      email: 'rosie710@gmail.com',
      password: 'Sarnai1234',
    },
    {
      firstName: 'Dennis',
      lastName: 'Ritchie',
      username: 'dennis99',
      email: 'denis99@gmail.com',
      password: 'Dennis1234',
    },
    {
      firstName: 'Michidmaa',
      lastName: 'Purevjav',
      username: 'michidmaap6',
      email: 'michidmaap6@gmail.com',
      password: 'Michidmaa1234',
    },
  ];

  findUser(val: string): userInfo | undefined {
    return this.userData.find((user) => user.email === val);
  }

  // addUser(val: userInfo) {
  //   this.userData.push(val);
  //   console.log('service: userData :>> ', this.userData);
  // }

  // addUser(
  //   fname: string,
  //   lname: string,
  //   uname: string,
  //   mail: string,
  //   pass: string
  // ) {
  //   this.userData.push({
  //     firstName: fname,
  //     lastName: lname,
  //     username: uname,
  //     email: mail,
  //     password: pass,
  //   });
  // }

  // emailMatch(val: string): boolean {
  //   if (this.userData.find((user) => user.email === val)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // retPass(val: string): string | undefined {
  //   const user = this.userData.find((user) => user.email === val);
  //   if (user) {
  //     return user.password;
  //   } else {
  //     return undefined;
  //   }
  // }
}
