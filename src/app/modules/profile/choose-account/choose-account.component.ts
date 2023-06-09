import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-choose-account',
  templateUrl: './choose-account.component.html',
})
export class ChooseAccountComponent implements OnInit {
  userDatas: any;

  constructor(
    private apiService: ApiService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getAllUserData();
  }

  getAllUserData() {
    this.apiService.getUsers().subscribe((res) => (this.userDatas = res));
  }

  deleteUser(id: number) {
    this.apiService.deleteUser(id).subscribe((res) => alert('User removed'));
    this.getAllUserData();
  }

  onChoose(email: string) {
    this.dataService.setPlaceholder(email);
  }
}
