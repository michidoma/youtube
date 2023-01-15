import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { card } from '../models/card';
import { contents } from '../content-section/content-section.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [],
})
export class DetailsComponent {
  @Input() id: any;
  @Input() contents: card[] = contents;
  showMore: boolean = false;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    for (var i = 0; i < contents.length; i++) {
      contents[i].safeEmbed = this.sanitizer.bypassSecurityTrustResourceUrl(
        contents[i].embed
      );
    }
  }
}
