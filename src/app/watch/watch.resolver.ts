import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
export class WatchResolver implements Resolve<any> {
  constructor(private http: HttpClient, public sanitizer: DomSanitizer) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    let contents: card[] = [];
    this.http.get<any>('/src/app/api/datas.ts').subscribe((data) => {
      contents = data;
    });

    const idParam = Number(route.queryParamMap.get('id'));
    const data: any = contents.find((i) => i.id === idParam);

    data.safeEmbed = this.sanitizer.bypassSecurityTrustResourceUrl(
      data.embed + '?autoplay=1'
    );

    return of(data);
  }
}
