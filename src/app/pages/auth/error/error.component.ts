import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  standalone: true,
  imports: [RouterModule, MaterialModule],

  styleUrls: ['./error.component.css'],
})
export class ErrorComponent {}
