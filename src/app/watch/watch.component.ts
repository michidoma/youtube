import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { card } from '../models/card';
import { contents } from '../content-section/content-section.component';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styles: [],
})
export class WatchComponent implements OnInit {
  content: card | undefined;
  id: number = 0;
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = +params['id'];
      this.content = contents.find((content) => content.id === this.id);
    });
  }
}
