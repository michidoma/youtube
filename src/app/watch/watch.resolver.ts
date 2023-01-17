import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { contents } from '../content-section/content-section.component';

@Injectable({
  providedIn: 'root',
})
export class WatchResolver implements Resolve<any> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const idParam = Number(route.queryParamMap.get('id'));
    const data = contents.find((i) => i.id === idParam);
    console.log('filtered content: ', data);
    return of(data);
  }
}
