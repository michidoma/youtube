import { Component } from '@angular/core';
import { card } from '../../shared/card.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
})
export class ContentSectionComponent {
  contents?: card[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('/src/app/api/datas.ts').subscribe((data) => {
      this.contents = data;
    });
  }
}
