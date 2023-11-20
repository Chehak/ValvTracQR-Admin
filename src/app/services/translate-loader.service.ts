// translate-loader.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Injectable({
  providedIn: 'root',
})
export class TranslateLoaderService extends TranslateHttpLoader {
  loadTranslations() {
    throw new Error('Method not implemented.');
  }
  constructor(http: HttpClient) {
    super(http);
  }
}
