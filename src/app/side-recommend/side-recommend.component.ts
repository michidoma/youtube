import { Component, Input, OnInit } from '@angular/core';
import { card } from '../models/card';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-side-recommend',
  templateUrl: './side-recommend.component.html',
  styles: [],
})
export class SideRecommendComponent implements OnInit {
  @Input() content: card | undefined;
  contents: card[] | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('/src/app/api/datas.ts').subscribe((data) => {
      this.contents = data;
    });
  }
}
