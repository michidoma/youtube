import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  tsendeesWorkers = [
    {
      name: 'Dalai',
      status: 'inactive',
    },
    {
      name: 'Michidmaa',
      status: 'active',
    },
    {
      name: 'Tuguldur',
      status: 'active',
    },
    {
      name: 'Munkuu',
      status: 'active',
    },
  ];

  AddNewWorker(name: string, status: string) {
    this.tsendeesWorkers.push({ name: name, status: status });
  }
}
