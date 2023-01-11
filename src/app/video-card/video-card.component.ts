import { Component, Input } from '@angular/core';
import { card } from '../models/card';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
})
export class VideoCardComponent {
  @Input() vCart: any;
}
