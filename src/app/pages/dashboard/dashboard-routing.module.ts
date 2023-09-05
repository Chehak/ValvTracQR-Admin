import { Routes } from '@angular/router';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard-view',
        component: DashboardViewComponent,
        data: {
          title: 'Analytical',
          urls: [
            { title: 'Dashboard', url: '/dashboard/dashboard-view' },
            { title: 'Analytical' },
          ],
        },
      },
    ],
  },
];
