import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { card } from '../models/card';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: [],
})
export class CategoriesComponent implements OnInit {
  filtered: card[] = [];
  cat: String = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((resolversData) => {
      this.filtered = this.activatedRoute.snapshot.data['catData'];
    });
    this.activatedRoute.queryParams.subscribe((params) => {
      let str: string = params['cat'];
      // let str: any = this.titleService.setTitle(params['cat']);
      str = str[0].toUpperCase() + str.slice(1);
      this.titleService.setTitle(str);
    });
  }
}
