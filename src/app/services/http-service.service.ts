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

  getRoles(form: any): Observable<any> {
    const API_URL = `${this.baseURL}getRoles?limit=${form.limit}&page=${form.page}`;
    return this.http.get(API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  addRole(form: any): Observable<any> {
    const API_URL = `${this.baseURL}post`;
    return this.http.post(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  updateRole(form: any): Observable<any> {
    const API_URL = `${this.baseURL}update/${form?._id}`;
    return this.http.patch(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteRole(form: any): Observable<any> {
    const API_URL = `${this.baseURL}delete/${form?._id}`;
    return this.http.delete(API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
