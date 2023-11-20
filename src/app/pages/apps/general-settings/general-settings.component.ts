import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.css'],
})
export class GeneralSettingsComponent {
  lang: any;
  constructor(private translateService: TranslateService) {
    this.lang = localStorage.getItem('lang');
    this.translateService.use(this.lang);
  }
}
