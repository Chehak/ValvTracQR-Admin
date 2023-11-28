import { Routes } from '@angular/router';
import { AppEmployeeComponent } from './employee/employee.component';
import { RolesUsersComponent } from './roles-users/roles-users.component';
import { CurrenciesComponent } from './settings/regional-settings/currencies/currencies.component';
import { VatRateComponent } from './settings/regional-settings/vat-rate/vat-rate.component';
import { UnitsComponent } from './settings/regional-settings/units/units.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { MachinesOperationsComponent } from './machines-operations/machines-operations.component';
import { MachineUpdateComponent } from './machine-update/machine-update.component';
import { MachineAddComponent } from './machine-add/machine-add.component';
import { AdditionalFieldsComponent } from './additional-fields/additional-fields.component';
import { UpdateAdditionalFieldsComponent } from './update-additional-fields/update-additional-fields.component';
import { AddAdditionalFieldComponent } from './add-additional-field/add-additional-field.component';
import { TagsComponent } from './tags/tags.component';
import { EditTagComponent } from './edit-tag/edit-tag.component';
import { AddTagComponent } from './add-tag/add-tag.component';
import { ApiComponent } from 'src/app/api/api.component';
import { AddApiKeyComponent } from 'src/app/add-api-key/add-api-key.component';
import { UpdateApiKeyComponent } from 'src/app/update-api-key/update-api-key.component';
import { WorkTimeComponent } from 'src/app/work-time/work-time.component';
import { AddWorkTimeComponent } from 'src/app/add-work-time/add-work-time.component';
import { ShowPausesComponent } from './show-pauses/show-pauses.component';
import { ViewMachinesOperationsComponent } from './view-machines-operations/view-machines-operations.component';

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
        },
      },
      {
        path: 'vat-rate',
        component: VatRateComponent,
        data: {
          title: 'VAT Rate',
        },
      },
      {
        path: 'units',
        component: UnitsComponent,
        data: {
          title: 'Units',
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
      {
        path: 'add-machines-operations',
        component: MachineAddComponent,
        data: {
          title: 'Add Machines/Operations',
          urls: [
            // { title: 'General Settings', url: '/settings/general-settings' },
          ],
        },
      },
      {
        path: 'update-machines-operations/:id',
        component: MachineUpdateComponent,
        data: {
          title: 'Update Machines/Operations',
          urls: [
            // { title: 'General Settings', url: '/settings/general-settings' },
          ],
        },
      },
      {
        path: 'view-machines-operations/:id',
        component: ViewMachinesOperationsComponent,
        data: {
          title: 'View',
          urls: [
            // { title: 'General Settings', url: '/settings/general-settings' },
          ],
        },
      },
      {
        path: 'additional-fields',
        component: AdditionalFieldsComponent,
        data: {
          title: 'Additional Fields',
          urls: [
            // { title: 'General Settings', url: '/settings/general-settings' },
          ],
        },
      },
      {
        path: 'update-additional-fields/:id',
        component: UpdateAdditionalFieldsComponent,
        data: {
          title: 'Update Additional Fields',
          urls: [
            // { title: 'General Settings', url: '/settings/general-settings' },
          ],
        },
      },
      {
        path: 'add-additional-fields',
        component: AddAdditionalFieldComponent,
        data: {
          title: 'Add Additional Fields',
          urls: [
            // { title: 'General Settings', url: '/settings/general-settings' },
          ],
        },
      },
      {
        path: 'tags',
        component: TagsComponent,
        data: {
          title: 'Tags',
          urls: [
            // { title: 'General Settings', url: '/settings/general-settings' },
          ],
        },
      },
      {
        path: 'update-tags/:id',
        component: EditTagComponent,
        data: {
          title: 'Update Tag',
          urls: [
            // { title: 'General Settings', url: '/settings/general-settings' },
          ],
        },
      },
      {
        path: 'add-tags',
        component: AddTagComponent,
        data: {
          title: 'Add Tag',
          urls: [
            // { title: 'General Settings', url: '/settings/general-settings' },
          ],
        },
      },
      {
        path: 'api-keys',
        component: ApiComponent,
        data: {
          title: 'API Keys',
          urls: [
            // { title: 'General Settings', url: '/settings/general-settings' },
          ],
        },
      },
      {
        path: 'add-api-keys',
        component: AddApiKeyComponent,
        data: {
          title: 'Add API Keys',
          urls: [
            // { title: 'General Settings', url: '/settings/general-settings' },
          ],
        },
      },
      {
        path: 'update-api-keys/:id',
        component: UpdateApiKeyComponent,
        data: {
          title: ' Update API Keys',
          urls: [
            // { title: 'General Settings', url: '/settings/general-settings' },
          ],
        },
      },
      {
        path: 'work-time',
        component: WorkTimeComponent,
        data: {
          title: 'Clock-in/Clock-out history',
          urls: [
            {
              title:
                'Here you can edit your workers clock in and clock out time',
            },
          ],
        },
      },
      {
        path: 'add-work-time',
        component: AddWorkTimeComponent,
        data: {
          title: 'Add Work Time',
          // urls: [
          //   {
          //     title:
          //       'Here you can edit your workers clock in and clock out time',
          //   },
          // ],
        },
      },

      {
        path: 'show-pauses',
        component: ShowPausesComponent,
        data: {
          title: 'Work pauses registration',
        },
      },
    ],
  },
];
