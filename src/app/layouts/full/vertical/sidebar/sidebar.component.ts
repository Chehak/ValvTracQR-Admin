import { Component, OnInit, ViewChild } from '@angular/core';
import { BrandingComponent } from './branding.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [BrandingComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  lang: any;
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang');
    this.translateService.use(this.lang);
  }
}
