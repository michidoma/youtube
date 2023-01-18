import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { filter, Observable, of } from 'rxjs';
import { contents } from '../content-section/content-section.component';
import { card } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class CategoriesResolver implements Resolve<any> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const filteredArray: card[] = [];
    let category = route.queryParamMap.get('cat');
    for (var i = 0; i < contents.length; i++) {
      if (contents[i].categories.find((str) => str == category) != undefined)
        filteredArray.push(contents[i]);
    }
    return of(filteredArray);
  }
}
