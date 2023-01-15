import { Component, Input } from '@angular/core';
import { card } from '../models/card';
import { contents } from '../content-section/content-section.component';

@Component({
  selector: 'app-side-recommend',
  templateUrl: './side-recommend.component.html',
  styles: [],
})
export class SideRecommendComponent {
  @Input() id: any;
  @Input() contents: card[] = contents;
}
