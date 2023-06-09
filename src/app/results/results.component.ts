import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { card } from 'src/app/shared/card.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent {
  resultArray?: card[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((resolversData) => {
      this.resultArray = resolversData['resultsData'];
    });
  }
}
