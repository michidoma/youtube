import { Component, Input, OnInit } from '@angular/core';
import { card } from '../models/card';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-side-recommend',
  templateUrl: './side-recommend.component.html',
  styles: [],
})
export class SideRecommendComponent implements OnInit {
  @Input() content: card | undefined;
  contents: card[] | undefined;
  loggedIn: number | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.loggedIn = +params['log'];
    });
    this.http.get<any>('/src/app/api/datas.ts').subscribe((data) => {
      this.contents = data;
    });
  }
}
