import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  closed: boolean = true;
  constructor() {}
  setClosed(data: boolean) {
    this.closed = data;
  }
  getClosed() {
    return this.closed;
  }
}
