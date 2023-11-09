import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { HttpServiceService } from 'src/app/services/http-service.service';

export interface PeriodicElement {
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
    worker: 'Sam',
    clockIn: new Date('2023-11-02'),
    clockOut: new Date('2023-11-02'),
    workingTime: '90:000',
    pauseTime: '30:00',
    numberOfPauses: 3,
    comment: 'Good',
  },

  {
    worker: 'Jack',
    clockIn: new Date('2023-11-02'),
    clockOut: new Date('2023-11-02'),
    workingTime: '90:000',
    pauseTime: '30:00',
    numberOfPauses: 3,
    comment: 'Good',
  },
  {
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
    private route: Router
  ) {}

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
    this.route.navigate(['/apps/add-machines-operations']);
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
}
