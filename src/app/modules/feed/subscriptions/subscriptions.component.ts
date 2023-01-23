import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styles: [],
})
export class SubscriptionsComponent {
  subscriptions: string =
    'M20,7H4V6h16V7z M22,9v12H2V9H22z M15,15l-5-3v6L15,15z M17,3H7v1h10V3z';
  filteredData: any;
  grid: boolean = true;

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.data.subscribe((resolversData) => {
      this.filteredData = resolversData['subFilteredData'];
    });
  }
}
