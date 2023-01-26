import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { userInfo } from 'src/app/shared/user-info.model';

@Component({
  selector: 'app-choose-account',
  templateUrl: './choose-account.component.html',
})
export class ChooseAccountComponent implements OnInit {
  userDatas: any;

  constructor(private apiService: ApiService) {}

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
}
