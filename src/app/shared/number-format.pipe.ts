import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number | any): String {
    if (value < 1000) return value.toString();
    if (value < 1000000) return Math.floor(value / 1000) + 'K';
    if (value < 1000000000) return Math.floor(value / 1000000) + 'M';
    if (value < 1000000000000) return Math.floor(value / 1000000000) + 'B';
    return Math.floor(value / 1000000000000) + 'T';
  }
}
