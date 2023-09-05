import { NgModule } from '@angular/core';

import { DashboardRoutes } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild(DashboardRoutes), DashboardViewComponent],
})
export class DashboardModule {}
