import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-video-card',
  templateUrl: './side-video-card.component.html',
  styles: [],
})
export class SideVideoCardComponent implements OnInit {
  @Input() itemData: any;
  imgSrc: string | undefined;
  ngOnInit() {
    this.imgSrc = this.itemData.thumbnail;
  }
}
