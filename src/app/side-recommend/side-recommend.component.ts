import { Component, Input, OnInit } from '@angular/core';
import { card } from '../models/card';
import { contents } from '../content-section/content-section.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-recommend',
  templateUrl: './side-recommend.component.html',
  styles: [],
})
export class SideRecommendComponent implements OnInit {
  @Input() content: card | undefined;
  contents: card[] = contents;
  loggedIn: number | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.loggedIn = +params['log'];
    });
  }
}
