import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, map, startWith } from 'rxjs';
import { HttpServiceService } from 'src/app/services/http-service.service';
import * as moment from 'moment';

export interface PeriodicElement {
  id: number;
  worker: string;
  clockIn: Date;
  clockOut: Date;
  workingTime: string;
  pauseTime: string;
  numberOfPauses: number;
  comment: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    worker: 'Sam',
    clockIn: new Date('2023-11-02'),
    clockOut: new Date('2023-11-02'),
    workingTime: '90:000',
    pauseTime: '30:00',
    numberOfPauses: 3,
    comment: 'Good',
  },

  {
    id: 2,
    worker: 'Jack',
    clockIn: new Date('2023-11-02'),
    clockOut: new Date('2023-11-02'),
    workingTime: '90:000',
    pauseTime: '30:00',
    numberOfPauses: 3,
    comment: 'Good',
  },
  {
    id: 3,
    worker: 'John',
    clockIn: new Date('2023-11-02'),
    clockOut: new Date('2023-11-02'),
    workingTime: '90:000',
    pauseTime: '30:00',
    numberOfPauses: 3,
    comment: 'Good',
  },
];

@Component({
  selector: 'app-work-time',
  templateUrl: './work-time.component.html',
  styleUrls: ['./work-time.component.css'],
})
export class WorkTimeComponent {
  myDate: any;
  clockInForm!: FormGroup;
  selected: any;
  selectedClockOut: any;
  alwaysShowCalendars: boolean;
  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [
      moment().subtract(1, 'month').startOf('month'),
      moment().subtract(1, 'month').endOf('month'),
    ],
  };
  invalidDates: moment.Moment[] = [
    moment().add(2, 'days'),
    moment().add(3, 'days'),
    moment().add(5, 'days'),
  ];

  isInvalidDate = (m: moment.Moment) => {
    return this.invalidDates.some((d) => d.isSame(m, 'day'));
  };
  activePopoverId: any;
  activePopoverIdout: any;
  lang: any;
  workerToggle: boolean = true;
  @ViewChild('table') table!: MatTable<PeriodicElement>;
  displayedColumns: string[] = [
    'worker',
    'clock in',
    'clock out',
    'working time',
    'pause time',
    'number of pauses',
    'comment',
  ];
  dataSource = ELEMENT_DATA;
  dragDisabled = true;

  filterControl = new FormControl('');
  searchoption: string[] = ['One', 'Two', 'Three'];
  searchfilteredOptions!: Observable<string[]>;

  constructor(
    public dialog: MatDialog,
    public service: HttpServiceService,
    private route: Router,
    private translateService: TranslateService
  ) {
    this.alwaysShowCalendars = true;
    this.lang = localStorage.getItem('lang');
    this.translateService.use(this.lang);
  }

  ngAfterViewInit(): void {
    this.searchfilteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._searchfilter(value || ''))
    );
  }

  getPageSizeOptions() {
    return [10, 20, 30, 40];
  }
  redirect() {
    this.route.navigate(['/apps/add-work-time']);
  }
  redirectShowPauses() {
    this.route.navigate(['/apps/show-pauses']);
  }

  private _searchfilter(value: string): string[] {
    const searchfilterValue = value.toLowerCase();

    return this.searchoption.filter((searchoption) =>
      searchoption.toLowerCase().includes(searchfilterValue)
    );
  }

  togglePopoverClockIn(popoverId: string, val: any) {
    // this.activePopoverIdout = null;

    this.activePopoverIdout =
      this.activePopoverIdout === popoverId ? null : popoverId;
  }

  togglePopoverOut(popoverId: string) {
    this.activePopoverId = null;

    this.activePopoverIdout =
      this.activePopoverIdout === popoverId ? null : popoverId;
  }

  closePopover() {
    this.activePopoverId = null;
  }
  closePopoverOut() {
    this.activePopoverIdout = null;
  }

  resetClockIn(id: any) {}

  saveClockIn(element: any) {}
}
