import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { card } from '../shared/card.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: [],
})
export class CategoriesComponent implements OnInit {
  filtered?: card[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((resolversData) => {
      this.filtered = resolversData['catData'][0];
      this.titleService.setTitle(resolversData['catData'][1]);
    });
  }
}
