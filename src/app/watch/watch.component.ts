import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styles: [],
})
export class WatchComponent implements OnInit {
  id: String | undefined | null;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
