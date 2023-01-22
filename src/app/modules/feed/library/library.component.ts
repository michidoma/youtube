import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { card } from 'src/app/models/card';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styles: [],
})
export class LibraryComponent {
  library: string =
    'M4,20h14v1H3V6h1V20z M21,3v15H6V3H21z M17,10.5L11,7v7L17,10.5z';
  contents: card[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('/src/app/api/datas.ts').subscribe((data) => {
      this.contents = data;
    });
  }
}
