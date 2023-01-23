import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataService } from '../services/data.service';
import { card } from '../shared/card.model';

@Injectable({
  providedIn: 'root',
})
export class ResultsResolver implements Resolve<any> {
  constructor(private dataService: DataService) {}

  contents: card[] = [];

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.dataService.getContentsData$().subscribe((data) => {
      this.contents = data;
    });

    const resultArray: card[] = [];
    const searchQuery = route.queryParamMap.get('search_query') ?? [];
    const searchArray: string[] = String(searchQuery).split(' ');

    for (var j = 0; j < searchArray.length; j++) {
      for (var i = 0; i < this.contents.length; i++) {
        if (
          this.contents[i].keywords.filter((str) => str == searchArray[j])
            .length != 0
        ) {
          if (resultArray.indexOf(this.contents[i]) === -1)
            resultArray.push(this.contents[i]);
        }
      }
    }

    return of(resultArray);
  }
}
