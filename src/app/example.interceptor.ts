import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { contents } from './content-section/content-section.component';

@Injectable()
export class ExampleInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const req = request.clone({
    //   headers: request.headers.set('Authorization', 'Bearer jsds'),
    // });
    // console.log(request);
    // console.log('req: ', req);
    return next.handle(request);
    // return of(new HttpResponse({ body: contents }));
  }
}
