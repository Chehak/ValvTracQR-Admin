import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  lang: any;
  constructor(private translate: TranslateService) {
    console.log('hitted');
    this.lang = localStorage.getItem('lang');
    this.translate.use(this.lang);
  }
  title = 'ValvTracAdmin';
}
