import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { card } from '../shared/card.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesResolver implements Resolve<any> {
  constructor(private http: HttpClient) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    let contents: card[] = [];
    this.http.get<any>('/src/app/api/datas.ts').subscribe((data) => {
      contents = data;
    });

    const filteredArray: card[] = [];
    let category = route.queryParamMap.get('cat');
    for (var i = 0; i < contents.length; i++) {
      if (contents[i].categories.find((str) => str == category) != undefined)
        filteredArray.push(contents[i]);
    }
    return of(filteredArray);
  }
}
