import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FilterService } from 'src/app/services/filter.service';
import { card } from '../../shared/card.model';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
})
export class ContentSectionComponent implements OnInit, OnDestroy {
  contents?: card[];

  constructor(
    private filterService: FilterService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService
      .getContentsData$()
      .subscribe((data) => (this.contents = data));
    this.filterService.change.subscribe(
      (fil) => (this.contents = this.filterService.getFilteredContents())
    );
  }

  ngOnDestroy() {
    this.filterService.change.unsubscribe();
  }
}
