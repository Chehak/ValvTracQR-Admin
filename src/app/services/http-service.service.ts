import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  baseURL: string = 'https://vtrack-api.onrender.com/api/';

  constructor(private http: HttpClient) {}

  getRoles(): Observable<any> {
    const API_URL = `${this.baseURL}getAll`;
    return this.http.get(API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
