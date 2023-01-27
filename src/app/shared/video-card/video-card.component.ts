import { Component, Input, OnInit } from '@angular/core';
import { card } from '../card.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
})
export class VideoCardComponent implements OnInit {
  @Input() itemData: card | any;

  imgSrc?: string;

  ngOnInit() {
    this.imgSrc = this.itemData.thumbnail;
  }
}
