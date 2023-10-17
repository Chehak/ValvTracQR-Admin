import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  baseURL: string = 'https://vtrack-api.onrender.com/api/';

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            if (event.status == 401) {
              alert('Unauthorized access!');
            }
          }
          return event;
        },
        error: (error) => {
          if (error.status === 401) {
            alert('Unauthorized access!');
          } else if (error.status === 404) {
            alert('Page Not Found!');
          }
        },
      })
    );
  }

  openSnackBar(message: string, action: string) {
    console.log('control comes here');

    this._snackBar.open(message, action);
  }

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private loader: NgxUiLoaderService
  ) {}

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

  searhRole(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchRole?text=${form}`;
    return this.http.get(API_URL, form).pipe(
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
    return this.http.delete(API_URL, { responseType: 'text' }).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
