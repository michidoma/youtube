import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { DataService } from '../services/data.service';
import { card } from '../shared/card.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesResolver implements Resolve<any> {
  constructor(private dataService: DataService) {}

  contents: card[] = [];

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.dataService.getContentsData$().subscribe((data) => {
      this.contents = data;
    });

    const filteredArray: card[] = [];
    let category = route.queryParamMap.get('cat') || '';
    for (var i = 0; i < this.contents.length; i++) {
      if (
        this.contents[i].categories.find((str) => str == category) != undefined
      )
        filteredArray.push(this.contents[i]);
    }

    category = category[0].toUpperCase() + category.slice(1);
    const joined$ = forkJoin(of(filteredArray), of(category));

    return joined$;
  }
}
