import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    console.log('hitted');

    this.switchLanguage(localStorage.getItem('lang') || 'en');
  }
  title = 'ValvTracAdmin';

  switchLanguage(lang: any) {
    localStorage.setItem('lang', lang);
    // this.translate.use(lang);
  }
}
