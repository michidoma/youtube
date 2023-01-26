import { Injectable } from '@angular/core';
import {
  Resolve,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { card } from 'src/app/shared/card.model';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionsResolver implements Resolve<any> {
  constructor(private dataService: DataService) {}

  contents: card[] = [];

  resolve(): Observable<any> {
    this.dataService.getContentsData$().subscribe((data) => {
      this.contents = data;
    });

    const today = new Date();

    const todayVideos = this.contents.filter(
      (content) =>
        content.date.getFullYear() === today.getFullYear() &&
        content.date.getMonth() === today.getMonth() &&
        content.date.getDate() === today.getDate()
    );
    this.contents = this.contents.filter(
      (content) => !todayVideos.includes(content)
    );

    const diff = (3 * 24 + 7) * 60 * 60 * 1000;
    const weekToMilSec = 7 * 24 * 60 * 60 * 1000;
    const thisWeekVideos = this.contents.filter(
      (content) =>
        Math.floor((content.date.getTime() + diff) / weekToMilSec) ===
        Math.floor((today.getTime() + diff) / weekToMilSec)
    );
    this.contents = this.contents.filter(
      (content) => !thisWeekVideos.includes(content)
    );

    const thisMonthVideos = this.contents.filter(
      (content) =>
        content.date.getFullYear() === today.getFullYear() &&
        content.date.getMonth() === today.getMonth()
    );
    this.contents = this.contents.filter(
      (content) => !thisMonthVideos.includes(content)
    );

    const thisYearVideos = this.contents.filter(
      (content) => content.date.getFullYear() === today.getFullYear()
    );
    this.contents = this.contents.filter(
      (content) => !thisYearVideos.includes(content)
    );

    const arr = {
      today: todayVideos,
      thisWeek: thisWeekVideos,
      thisMonth: thisMonthVideos,
      thisYear: thisYearVideos,
      other: this.contents,
    };

    return of(arr);
  }
}
