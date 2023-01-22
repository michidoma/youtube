import { Component, Input, OnInit } from '@angular/core';
import { card } from '../../shared/card.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-side-recommend',
  templateUrl: './side-recommend.component.html',
  styles: [],
})
export class SideRecommendComponent implements OnInit {
  @Input() content?: card;
  contents?: card[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('/src/app/api/datas.ts').subscribe((data) => {
      this.contents = data;
    });
  }
}
