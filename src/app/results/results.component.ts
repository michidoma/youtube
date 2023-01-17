import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { card } from 'src/app/models/card';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [],
})
export class ResultsComponent {
  resultArray: card[] = [];
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.resultArray = this.activatedRoute.snapshot.data['resultsData'];
  }
}
