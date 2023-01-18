import { Component, Input, OnInit } from '@angular/core';
import { card } from '../models/card';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
})
export class VideoCardComponent implements OnInit {
  @Input() itemData: card | any;
  imgSrc: string | undefined;
  ngOnInit() {
    this.imgSrc = this.itemData.thumbnail;
  }
}
