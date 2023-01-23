import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { card } from '../shared/card.model';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styles: [],
})
export class WatchComponent implements OnInit {
  content: card | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((resolverData) => {
      this.content = resolverData['watchData'];
      this.titleService.setTitle(this.content.title);
    });
  }
}
