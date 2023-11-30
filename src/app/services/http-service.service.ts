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
    return this.http.post(API_URL, form, { responseType: 'text' }).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteCurrency(form: any): Observable<any> {
    const API_URL = `${this.baseURL}deleteCurrency/${form}`;
    return this.http.delete(API_URL, { responseType: 'text' }).pipe(
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
    return this.http.post(API_URL, form, { responseType: 'text' }).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteUnit(form: any): Observable<any> {
    const API_URL = `${this.baseURL}deleteUnit/${form}`;
    return this.http.delete(API_URL, { responseType: 'text' }).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getVat(): Observable<any> {
    const API_URL = `${this.baseURL}getVAT`;
    return this.http.get(API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteVAT(form: any): Observable<any> {
    const API_URL = `${this.baseURL}deleteVAT/${form}`;
    return this.http.delete(API_URL, { responseType: 'text' }).pipe(
      map((res) => {
        return res;
      })
    );
  }

  addVAT(form: any): Observable<any> {
    const API_URL = `${this.baseURL}addVAT`;
    return this.http.post(API_URL, form, { responseType: 'text' }).pipe(
      map((res) => {
        return res;
      })
    );
  }

  // api key api's

  getApiKeys(): Observable<any> {
    const API_URL = `${this.baseURL}getAPI`;
    return this.http.get(API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  addApiKey(form: any): Observable<any> {
    const API_URL = `${this.baseURL}addAPI`;
    return this.http.post(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getApiKeybyId(form: any): Observable<any> {
    const API_URL = `${this.baseURL}getAPI/${form}`;
    return this.http.get(API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  updateApiKey(form: any): Observable<any> {
    const API_URL = `${this.baseURL}updateAPI/${form?.id}`;
    return this.http.patch(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteAPI(form: any): Observable<any> {
    const API_URL = `${this.baseURL}deleteAPI/${form}`;
    return this.http.delete(API_URL, { responseType: 'text' }).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchApiKey(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchAPI?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  // Additional Fields

  getAdditionalFields(): Observable<any> {
    const API_URL = `${this.baseURL}getField`;
    return this.http.get(API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  addAdditionalField(form: any): Observable<any> {
    const API_URL = `${this.baseURL}addField`;
    return this.http.post(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getAdditionalFieldId(form: any): Observable<any> {
    const API_URL = `${this.baseURL}getField/${form}`;
    return this.http.get(API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteField(form: any): Observable<any> {
    const API_URL = `${this.baseURL}deleteField/${form}`;
    return this.http.delete(API_URL, { responseType: 'text' }).pipe(
      map((res) => {
        return res;
      })
    );
  }

  updateAdditionalField(form: any): Observable<any> {
    const API_URL = `${this.baseURL}updateField/${form?.id}`;
    return this.http.patch(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchField(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchField?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchGroup(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchGroup?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchAssigned(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchAssigned?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  // drag and drop

  sortField(form: any): Observable<any> {
    const API_URL = `${this.baseURL}sortFields`;
    return this.http.post(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  // additional fields ends here

  getMachineOperations(): Observable<any> {
    const API_URL = `${this.baseURL}getMachines`;
    return this.http.get(API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  addMachine(form: any): Observable<any> {
    const API_URL = `${this.baseURL}addMachine`;
    return this.http.post(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getMachineId(form: any): Observable<any> {
    const API_URL = `${this.baseURL}getMachine/${form}`;
    return this.http.get(API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteMachine(form: any): Observable<any> {
    const API_URL = `${this.baseURL}deleteMachine/${form}`;
    return this.http.delete(API_URL, { responseType: 'text' }).pipe(
      map((res) => {
        return res;
      })
    );
  }

  updateMachine(form: any): Observable<any> {
    const API_URL = `${this.baseURL}updateMachine/${form?.id}`;
    return this.http.patch(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  sortFieldMachines(form: any): Observable<any> {
    const API_URL = `${this.baseURL}sortMachines`;
    return this.http.post(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchMachineName(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchMachine?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchMachineActive(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchActive?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }
  searchMachineEnd(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchEndMachine?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchMachinePrice(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchPrice?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchMachineCurrency(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchMachineCurrency?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getClients(): Observable<any> {
    const API_URL = `${this.baseURL}getClients`;
    return this.http.get(API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  addClient(form: any): Observable<any> {
    const API_URL = `${this.baseURL}addClient`;
    return this.http.post(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteClient(form: any): Observable<any> {
    const API_URL = `${this.baseURL}deleteClient/${form}`;
    return this.http.delete(API_URL, { responseType: 'text' }).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchClientName(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchClientName?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchClientActive(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchClientActive?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchClientAddress(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchClientAddress?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchClientPhone(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchClientPhone?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }
  searchClientCity(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchClientCity?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchClientTax(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchClientTax?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchClientPostalCode(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchClientPostal?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchClientWeb(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchClientWeb?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  searchClientComment(form: any): Observable<any> {
    const API_URL = `${this.baseURL}searchClientComments?text=${form}`;
    return this.http.get(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getClientId(form: any): Observable<any> {
    const API_URL = `${this.baseURL}getClient/${form}`;
    return this.http.get(API_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  updateClient(form: any): Observable<any> {
    const API_URL = `${this.baseURL}updateClient/${form?.id}`;
    return this.http.patch(API_URL, form).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
