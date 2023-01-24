import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { card } from '../shared/card.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor(private dataService: DataService) {}

  private filterKey: string = 'all';

  public change = new Subject<string>();

  setFilter(key: string) {
    this.filterKey = key;
    this.change.next(this.filterKey);
  }

  getFilteredContents(): card[] {
    let contents: card[] = [];
    this.dataService.getContentsData$().subscribe((data) => (contents = data));

    if (this.filterKey === 'all') {
      return contents;
    } else {
      return contents.filter((content) =>
        content.keywords.includes(this.filterKey)
      );
    }
  }
}
