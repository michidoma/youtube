import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getContentsData$() {
    return this.http.get<any>('/src/app/api/datas.ts');
  }
  getFilterData$() {
    return this.http.get<any>(
      'https://epostnet.novelsoft.mn:8083/api/custom/external/types/internship'
    );
  }
}
