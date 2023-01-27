import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FilterService } from 'src/app/services/filter.service';
import { card } from 'src/app/shared/card.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit, OnDestroy {
  filtersData: card[] | any;
  activeButton: number = 1;
  subscription?: Subscription;

  constructor(
    private dataService: DataService,
    private filterService: FilterService
  ) {}

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
