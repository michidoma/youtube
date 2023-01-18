import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { contents } from '../content-section/content-section.component';
import { card } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class ResultsResolver implements Resolve<any> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const resultArray: card[] = [];
    let searchQuery = route.queryParamMap.get('search_query') ?? [];
    let searchArray: string[] = String(searchQuery).split(' ');
    for (var j = 0; j < searchArray.length; j++) {
      for (var i = 0; i < contents.length; i++) {
        if (
          contents[i].keywords.filter((str) => str == searchArray[j]).length !=
          0
        ) {
          if (resultArray.indexOf(contents[i]) === -1)
            resultArray.push(contents[i]);
        }
      }
    }
    console.log('Resolver executed');
    return of(resultArray);
  }
}
