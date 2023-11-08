import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  durationInSeconds: number = 3;
  baseURL: string = 'https://vtrack-api.onrender.com/api/';

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loader.start();

    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            // Handle unauthorized access
            // You can display an alert or redirect the user as needed
          } else if (error.status === 404) {
            // Handle page not found error
            // You can display an alert or redirect the user as needed
          }
        }

        // Propagate the error to the caller
        return throwError(error);
      }),
      finalize(() => {
        this.loader.stop();
      })
    );
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
    });
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
    const API_URL = `${this.baseURL}addRole`;
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
    const API_URL = `${this.baseURL}updateRole/${form?._id}`;
    return this.http.patch(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteRole(form: any): Observable<any> {
    const API_URL = `${this.baseURL}deleteRole/${form?._id}`;
    return this.http.delete(API_URL, { responseType: 'text' }).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getTags(): Observable<any> {
    const API_URL = `${this.baseURL}getTags`;
    return this.http.get(API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  addTag(form: any): Observable<any> {
    const API_URL = `${this.baseURL}addTag`;
    return this.http.post(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getTagbyId(form: any): Observable<any> {
    const API_URL = `${this.baseURL}getTag/${form}`;
    return this.http.get(API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  updateTag(form: any): Observable<any> {
    const API_URL = `${this.baseURL}updateTag/${form?.id}`;
    return this.http.patch(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteTag(form: any): Observable<any> {
    const API_URL = `${this.baseURL}deleteTag/${form}`;
    return this.http.delete(API_URL, { responseType: 'text' }).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchTagName(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchTagName?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchTagColor(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchTagColor?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getCurrencies(): Observable<any> {
    const API_URL = `${this.baseURL}getCurrencies`;
    return this.http.get(API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  addCurrency(form: any): Observable<any> {
    const API_URL = `${this.baseURL}addCurrency`;
    return this.http.post(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getUnits(): Observable<any> {
    const API_URL = `${this.baseURL}getUnits`;
    return this.http.get(API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  addUnit(form: any): Observable<any> {
    const API_URL = `${this.baseURL}addUnit`;
    return this.http.post(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
