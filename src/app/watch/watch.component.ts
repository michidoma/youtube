import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { card } from '../models/card';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styles: [],
})
export class WatchComponent implements OnInit {
  content: card | any;
  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((resolversData) => {
      this.content = this.activatedRoute.snapshot.data['watchData'];
    });
  }
}
