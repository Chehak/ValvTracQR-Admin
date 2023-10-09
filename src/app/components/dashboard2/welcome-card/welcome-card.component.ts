import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { TablerIconsModule } from 'angular-tabler-icons';
@Component({
  selector: 'app-welcome-card',
  standalone: true,
  imports: [MaterialModule, TranslateModule, TablerIconsModule],
  templateUrl: './welcome-card.component.html',
})
export class AppWelcomeCardComponent {
  constructor(private translate: TranslateService) {}

  switchLanguage(lang: 'es' | 'en') {
    this.translate.use(lang);
  }
}
