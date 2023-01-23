import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataService } from '../services/data.service';
import { card } from '../shared/card.model';

@Injectable({
  providedIn: 'root',
})
export class WatchResolver implements Resolve<any> {
  constructor(
    public sanitizer: DomSanitizer,
    private dataService: DataService
  ) {}

  watchContent: card | any;

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.dataService.getContentsData$().subscribe((data) => {
      this.watchContent = data.find(
        (content: card) => content.id === Number(route.queryParamMap.get('id'))
      );
    });

    this.watchContent.safeEmbed = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.watchContent.embed + '?autoplay=1'
    );

    return of(this.watchContent);
  }
}
