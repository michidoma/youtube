import { Component, Input, OnInit } from '@angular/core';
import { card } from 'src/app/shared/card.model';

@Component({
  selector: 'app-side-video-card',
  templateUrl: './side-video-card.component.html',
  styles: [],
})
export class SideVideoCardComponent implements OnInit {
  @Input() itemData: card | any;
  imgSrc!: string;
  ngOnInit() {
    this.imgSrc = this.itemData.thumbnail;
  }
}
