import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { PopoverModule } from '@coreui/angular';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxPaginationModule } from 'ngx-pagination';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { ColorPickerModule } from 'ngx-color-picker';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Chat
// import { AppChatComponent } from './chat/chat.component';
//Contact
// import { AppContactDialogContentComponent } from './contact/contact.component';
// import { AppContactComponent } from './contact/contact.component';
//Courses
import { AppCoursesComponent } from './courses/courses.component';
import { AppCourseDetailComponent } from './courses/course-detail/course-detail.component';

//Notes
// import { AppNotesComponent } from './notes/notes.component';
//Todo
// import { AppTodoComponent } from './todo/todo.component';
// Permission
import { AppPermissionComponent } from './permission/permission.component';
//Mailbox
import {
  ListingComponent,
  ListingDialogDataExampleDialogComponent,
} from './email/listing/listing.component';
import { DetailComponent } from './email/detail/detail.component';
import { AppEmailComponent } from './email/email.component';

//Taskboard
import { AppTaskboardComponent } from './taskboard/taskboard.component';
import { TaskDialogComponent } from './taskboard/task-dialog.component';
import { OkAppTaskComponent } from './taskboard/ok-task/ok-task.component';
import { DeleteAppTaskComponent } from './taskboard/delete-task/delete-task.component';

//Calendar
import { AppFullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { CalendarDialogComponent } from './fullcalendar/fullcalendar.component';
import { CalendarFormDialogComponent } from './fullcalendar/calendar-form-dialog/calendar-form-dialog.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
// @ts-ignore
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppEmployeeComponent } from './employee/employee.component';
import { AppEmployeeDialogContentComponent } from './employee/employee.component';
import { AppAddEmployeeComponent } from './employee/add/add.component';

import { AppsRoutes } from './apps.routing';
import { MatNativeDateModule } from '@angular/material/core';
// import { PopoverModule } from 'ngx-bootstrap/popover';

// import {
//   AppTicketlistComponent,
//   AppTicketDialogContentComponent,
// } from './ticketlist/ticketlist.component';

//Invoice
import { AppInvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { AppInvoiceViewComponent } from './invoice/invoice-view/invoice-view.component';
import { AppAddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { AppEditInvoiceComponent } from './invoice/edit-invoice/edit-invoice.component';
import { OkDialogComponent } from './invoice/edit-invoice/ok-dialog/ok-dialog.component';
import { AddedDialogComponent } from './invoice/add-invoice/added-dialog/added-dialog.component';

// blog
import { AppBlogsComponent } from './blogs/blogs.component';
import { AppBlogDetailsComponent } from './blogs/details/details.component';
import { RolesUsersComponent } from './roles-users/roles-users.component';
import { AddComponent } from './roles-users/add/add.component';
import { AppRolesDialogComponent } from './roles-users/roles-users.component';
import { FilterDialogComponent } from './employee/filter-dialog/filter-dialog.component';
import { CurrenciesComponent } from './settings/regional-settings/currencies/currencies.component';
import { VatRateComponent } from './settings/regional-settings/vat-rate/vat-rate.component';
import { UnitsComponent } from './settings/regional-settings/units/units.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { MachinesOperationsComponent } from './machines-operations/machines-operations.component';
import { MachineAddComponent } from './machine-add/machine-add.component';
import { MachineUpdateComponent } from './machine-update/machine-update.component';
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
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { ShowPausesComponent } from './show-pauses/show-pauses.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslatePipe } from 'src/app/pipe/translate.pipe';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { ViewMachinesOperationsComponent } from './view-machines-operations/view-machines-operations.component';
import { IgxDateRangePickerModule } from 'igniteui-angular';

import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { ClientsComponent } from './clients/clients.component';

// import {  } from 'angular-moment-picker';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPermissionsModule.forRoot(),
    NgApexchartsModule,
    PopoverModule,
    TablerIconsModule.pick(TablerIcons),
    DragDropModule,
    NgxPaginationModule,
    MdbPopoverModule,
    IgxDateRangePickerModule,
    ColorPickerModule,
    HttpClientModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    AngularEditorModule,
    TranslateModule,
    NgxDaterangepickerMd.forRoot(),
    BsDatepickerModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    MatNativeDateModule,
    NgScrollbarModule,
  ],
  exports: [TablerIconsModule],
  declarations: [
    TranslatePipe,
    // AppChatComponent,
    AppPermissionComponent,
    // AppNotesComponent,
    // AppTodoComponent,
    AppTaskboardComponent,
    TaskDialogComponent,
    OkAppTaskComponent,
    DeleteAppTaskComponent,
    ListingDialogDataExampleDialogComponent,
    ListingComponent,
    DetailComponent,
    AppRolesDialogComponent,
    AppEmailComponent,
    AppFullcalendarComponent,
    CalendarDialogComponent,
    CalendarFormDialogComponent,
    AddWorkTimeComponent,
    WorkTimeComponent,
    AppCoursesComponent,
    AppCourseDetailComponent,
    AppEmployeeComponent,
    AppEmployeeDialogContentComponent,
    AppAddEmployeeComponent,
    AppInvoiceListComponent,
    AppInvoiceViewComponent,
    AppAddInvoiceComponent,
    AppEditInvoiceComponent,
    AddedDialogComponent,
    OkDialogComponent,
    AppBlogsComponent,
    AppBlogDetailsComponent,
    RolesUsersComponent,
    AddComponent,
    FilterDialogComponent,
    CurrenciesComponent,
    VatRateComponent,
    UnitsComponent,
    GeneralSettingsComponent,
    MachinesOperationsComponent,
    MachineAddComponent,
    MachineUpdateComponent,
    AdditionalFieldsComponent,
    UpdateAdditionalFieldsComponent,
    AddAdditionalFieldComponent,
    TagsComponent,
    EditTagComponent,
    AddTagComponent,
    ApiComponent,
    AddApiKeyComponent,
    UpdateApiKeyComponent,
    ShowPausesComponent,
    ViewMachinesOperationsComponent,
    ClientsComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpServiceService,
      multi: true,
    },
    HttpClient,
    NgxUiLoaderService,
    DatePipe,
  ],
})
export class AppsModule {}
