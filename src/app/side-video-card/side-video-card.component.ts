import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-video-card',
  templateUrl: './side-video-card.component.html',
  styles: [],
})
export class SideVideoCardComponent {
  @Input() itemData: any;
}
