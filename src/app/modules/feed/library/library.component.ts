import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { card } from 'src/app/shared/card.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styles: [],
})
export class LibraryComponent {
  library: string =
    'M4,20h14v1H3V6h1V20z M21,3v15H6V3H21z M17,10.5L11,7v7L17,10.5z';
  contents?: card[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getContentsData$().subscribe((data) => {
      this.contents = data;
    });
  }
}
