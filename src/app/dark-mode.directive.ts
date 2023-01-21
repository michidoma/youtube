import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDarkMode]',
})
export class DarkModeDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
  }
}
