import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private username: string = 'username';

  constructor() {}

  getUsername(): string {
    return this.username;
  }

  setUsername(val: string) {
    this.username = val;
  }
}
