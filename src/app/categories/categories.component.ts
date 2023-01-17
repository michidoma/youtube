import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { card } from '../models/card';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: [],
})
export class CategoriesComponent {
  filtered: card[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.filtered = this.activatedRoute.snapshot.data['catData'];
  }
}
