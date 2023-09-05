import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent {}
