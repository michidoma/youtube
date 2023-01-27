import { Component, Input, OnInit } from '@angular/core';
import { card } from '../../shared/card.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-side-recommend',
  templateUrl: './side-recommend.component.html',
  styles: [],
})
export class SideRecommendComponent implements OnInit {
  @Input() content?: card;

  contents?: card[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getContentsData$()
      .subscribe((data) => (this.contents = data));
  }
}
