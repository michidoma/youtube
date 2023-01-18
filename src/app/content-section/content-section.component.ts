import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { card } from '../models/card';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
})
export class ContentSectionComponent {
  contents: card[] = [];
  loggedIn: number | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get<any>('/src/app/api/datas.ts').subscribe((data) => {
      this.contents = data;
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      this.loggedIn = +params['log'];
    });
  }
}
