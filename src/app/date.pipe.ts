import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
})
export class DatePipe implements PipeTransform {
  transform(value: Date | any): String {
    let today = new Date();

    let minDiff: number = (today.getTime() - value.getTime()) / (1000 * 60);
    if (minDiff < 60)
      return Math.floor(minDiff) + ' minute' + (minDiff < 2 ? '' : 's');

    let hourDiff: number = minDiff / 60;
    if (hourDiff < 24)
      return Math.floor(hourDiff) + ' hour' + (hourDiff < 2 ? '' : 's');

    let dayDiff: number = hourDiff / 24;
    if (dayDiff < 7)
      return Math.floor(dayDiff) + ' day' + (dayDiff < 2 ? '' : 's');

    let weekDiff: number = dayDiff / 7;
    if (weekDiff < 30 / 7)
      return Math.floor(weekDiff) + ' week' + (weekDiff < 2 ? '' : 's');

    let monthDiff: number = dayDiff / 30;
    if (monthDiff < 12)
      return Math.floor(monthDiff) + ' month' + (monthDiff < 2 ? '' : 's');

    let yearDiff: number = dayDiff / 365;
    return Math.floor(yearDiff) + ' year' + (yearDiff < 2 ? '' : 's');
  }
}
