import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { FilterService } from 'src/app/services/filter.service';
import { card } from 'src/app/shared/card.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit, OnDestroy {
  constructor(
    private dataService: DataService,
    private filterService: FilterService
  ) {}

  filtersData: card[] | any;
  activeButton: number = 1;

  subscription?: Subscription;

  ngOnInit(): void {
    this.subscription = this.dataService.getFilters$().subscribe((data) => {
      this.filtersData = data;
    });
  }

  onClickFilter(key: string, order: number) {
    this.filterService.setFilter(key.toLowerCase());
    this.activeButton = order;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
