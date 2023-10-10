import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="branding">
      <h2>JC Valves</h2>
    </div>
  `,
})
export class BrandingComponent {
  options = this.settings.getOptions();

  constructor(private settings: CoreService) {}
}

//  <div class="branding">
//       <a href="/" *ngIf="options.theme === 'light'">
//         <img
//           src=".assets/images/logos/dark-logo.svg"
//           class="align-middle m-2"
//           alt="logo"
//         />
//       </a>
//       <a href="/" *ngIf="options.theme === 'dark'">
//         <img
//           src=".assets/images/logos/light-logo.svg"
//           class="align-middle m-2"
//           alt="logo"
//         />
//       </a>
//     </div>
