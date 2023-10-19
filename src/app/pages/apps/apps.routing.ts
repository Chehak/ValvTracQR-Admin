import { Routes } from '@angular/router';
import { AppEmployeeComponent } from './employee/employee.component';
import { RolesUsersComponent } from './roles-users/roles-users.component';
import { CurrenciesComponent } from './settings/regional-settings/currencies/currencies.component';
import { VatRateComponent } from './settings/regional-settings/vat-rate/vat-rate.component';
import { UnitsComponent } from './settings/regional-settings/units/units.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { MachinesOperationsComponent } from './machines-operations/machines-operations.component';

export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'employee',
        component: AppEmployeeComponent,
        data: {
          title: 'Users',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Users' },
          ],
        },
      },
      {
        path: 'roles-users',
        component: RolesUsersComponent,
        data: {
          title: 'Roles ',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Roles ' },
          ],
        },
      },
      {
        path: 'currencies',
        component: CurrenciesComponent,
        data: {
          title: 'Currencies',
          urls: [
            {
              title: 'Currencies',
              url: '/settings/regional-settings/currencies',
            },
            { title: 'Currencies' },
          ],
        },
      },
      {
        path: 'vat-rate',
        component: VatRateComponent,
        data: {
          title: 'Vat Rate',
          urls: [
            {
              title: 'Vat Rate',
              url: '/settings/regional-settings/vat-rate',
            },
            { title: 'Vat Rate' },
          ],
        },
      },
      {
        path: 'units',
        component: UnitsComponent,
        data: {
          title: 'Units',
          urls: [
            {
              title: 'Units',
              url: '/settings/regional-settings/units',
            },
            { title: 'Units' },
          ],
        },
      },
      {
        path: 'general-settings',
        component: GeneralSettingsComponent,
        data: {
          title: 'General Settings',
          urls: [
            // { title: 'General Settings', url: '/settings/general-settings' },
          ],
        },
      },
      {
        path: 'machines-operations',
        component: MachinesOperationsComponent,
        data: {
          title: 'Machines/Operations',
          urls: [
            // { title: 'General Settings', url: '/settings/general-settings' },
          ],
        },
      },
    ],
  },
];
