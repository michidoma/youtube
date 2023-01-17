import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { card } from 'src/app/models/card';
import { contents } from '../../../content-section/content-section.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [],
})
export class ResultsComponent {
  searchQuery: string = '';
  resultArray: card[] = [];
  searchArray: string[] = [];
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.searchQuery = params['search_query'];
      this.searchArray = this.searchQuery.split(' ');
      for (var j = 0; j < this.searchArray.length; j++) {
        for (var i = 0; i < contents.length; i++) {
          if (
            contents[i].keywords.filter((str) => str == this.searchArray[j])
              .length != 0
          ) {
            if (this.resultArray.indexOf(contents[i]) === -1)
              this.resultArray.push(contents[i]);
          }
        }
      }
    });
  }
}
