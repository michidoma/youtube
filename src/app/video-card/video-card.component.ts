import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
})
export class VideoCardComponent {
  @Input() itemData: any;
}
