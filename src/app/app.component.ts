import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  lang: any;
  constructor(private translate: TranslateService, private http: HttpClient) {
    this.lang = localStorage.getItem('lang') || 'en';
    const dynamicPath = './assets/i18n/' + this.lang + '.json';

    this.http.get(dynamicPath).subscribe((data: any) => {
      this.translate.use(this.lang);
    });
  }
  title = 'ValvTracAdmin';
}
