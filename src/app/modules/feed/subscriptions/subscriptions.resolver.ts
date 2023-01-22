import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { card } from 'src/app/shared/card.model';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionsResolver implements Resolve<any> {
  constructor(private http: HttpClient) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    let contents: card[] = [];
    this.http.get<any>('/src/app/api/datas.ts').subscribe((data) => {
      contents = data;
    });

    const today = new Date();

    const todayVideos = contents.filter(
      (content) =>
        content.date.getFullYear() === today.getFullYear() &&
        content.date.getMonth() === today.getMonth() &&
        content.date.getDate() === today.getDate()
    );
    contents = contents.filter((content) => !todayVideos.includes(content));

    const diff = (3 * 24 + 7) * 60 * 60 * 1000;
    const weekToMilSec = 7 * 24 * 60 * 60 * 1000;
    const thisWeekVideos = contents.filter(
      (content) =>
        Math.floor((content.date.getTime() + diff) / weekToMilSec) ===
        Math.floor((today.getTime() + diff) / weekToMilSec)
    );
    contents = contents.filter((content) => !thisWeekVideos.includes(content));

    const thisMonthVideos = contents.filter(
      (content) =>
        content.date.getFullYear() === today.getFullYear() &&
        content.date.getMonth() === today.getMonth()
    );
    contents = contents.filter((content) => !thisMonthVideos.includes(content));

    const thisYearVideos = contents.filter(
      (content) => content.date.getFullYear() === today.getFullYear()
    );
    contents = contents.filter((content) => !thisYearVideos.includes(content));

    const arr = {
      today: todayVideos,
      thisWeek: thisWeekVideos,
      thisMonth: thisMonthVideos,
      thisYear: thisYearVideos,
      other: contents,
    };

    return of(arr);
  }
}
