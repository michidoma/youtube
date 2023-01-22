import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit {
  constructor(private http: HttpClient) {}

  httpData: any;

  ngOnInit(): void {
    this.http
      .get<any>(
        'https://epostnet.novelsoft.mn:8083/api/custom/external/types/internship'
      )
      .subscribe((data) => {
        this.httpData = data;
      });
  }
}
