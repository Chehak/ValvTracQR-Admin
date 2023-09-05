import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PagesRoutes } from './pages-routing.module';
import { StarterComponent } from './starter/starter.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(PagesRoutes),
    StarterComponent,
  ],
})
export class PagesModule {}
