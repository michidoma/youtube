import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { card } from '../../shared/card.model';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
})
export class ContentSectionComponent {
  contents?: card[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getContentsData$()
      .subscribe((data) => (this.contents = data));
  }
}
