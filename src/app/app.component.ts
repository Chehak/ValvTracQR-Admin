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

    this.switchLanguage('en');
  }
  title = 'ValvTracAdmin';

  switchLanguage(lang: 'de' | 'en') {
    this.translate.use(lang);
  }
}
