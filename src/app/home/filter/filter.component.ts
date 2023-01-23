import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit {
  constructor(private dataService: DataService) {}

  httpData: any;

  ngOnInit(): void {
    this.dataService.getFilterData$().subscribe((data) => {
      this.httpData = data;
    });
  }
}
