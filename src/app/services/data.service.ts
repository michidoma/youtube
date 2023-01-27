import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private placeholder?: string;

  constructor(private http: HttpClient) {}

  getContentsData$(): Observable<any> {
    return this.http.get<any>('/src/app/api/datas.ts');
  }

  getFilters$(): Observable<any> {
    return this.http.get<any>(
      'https://epostnet.novelsoft.mn:8083/api/custom/external/types/internship'
    );
  }

  setPlaceholder(email: string) {
    this.placeholder = email;
  }

  getChosenEmail() {
    return this.placeholder;
  }
}
