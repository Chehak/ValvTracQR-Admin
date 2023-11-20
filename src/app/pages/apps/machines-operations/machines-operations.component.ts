import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TranslateService } from '@ngx-translate/core';

export interface PeriodicElement {
  orderOnSchedule: number;
  shopFloorView: string;
  name: string;
  active: string;
  endMachine: string;
  workHourPrice: number;
  currency: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    orderOnSchedule: 1,
    shopFloorView: 'Default',
    name: 'Hydrogen',
    active: 'yes',
    endMachine: 'yes',
    workHourPrice: 2,
    currency: 'INR',
  },

  {
    orderOnSchedule: 1,
    shopFloorView: 'Default shop floor view ',
    name: 'Helium',
    active: 'yes',
    endMachine: 'yes',
    workHourPrice: 2,
    currency: 'INR',
  },
  {
    orderOnSchedule: 1,
    shopFloorView: 'Default shop floor view ',
    name: 'Lithium',
    active: 'yes',
    endMachine: 'yes',
    workHourPrice: 2,
    currency: 'INR',
  },
  {
    orderOnSchedule: 1,
    shopFloorView: 'Default shop floor view ',
    name: 'Beryllium',
    active: 'yes',
    endMachine: 'yes',
    workHourPrice: 2,
    currency: 'INR',
  },
  {
    orderOnSchedule: 1,
    shopFloorView: 'Default shop floor view ',
    name: 'Boron',
    active: 'yes',
    endMachine: 'yes',
    workHourPrice: 2,
    currency: 'INR',
  },
];

@Component({
  selector: 'app-machines-operations',
  templateUrl: './machines-operations.component.html',
  styleUrls: ['./machines-operations.component.css'],
})
export class MachinesOperationsComponent {
  @ViewChild('table') table!: MatTable<PeriodicElement>;
  displayedColumns: string[] = [
    'order on schedule',
    'shop floor view',
    'name',
    'active',
    'end machine',
    'work hour price',
    'currency',
    'action',
  ];
  dataSource = ELEMENT_DATA;
  dragDisabled = true;

  filterControl = new FormControl('');
  searchoption: string[] = ['One', 'Two', 'Three'];
  searchfilteredOptions!: Observable<string[]>;
  lang: any;
  constructor(
    public dialog: MatDialog,
    public service: HttpServiceService,
    private route: Router,
    private translateService: TranslateService
  ) {
    this.lang = localStorage.getItem('lang');
    this.translateService.use(this.lang);
  }

  ngAfterViewInit(): void {
    this.searchfilteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._searchfilter(value || ''))
    );
  }

  dropTable(event: CdkDragDrop<PeriodicElement[]>) {
    const prevIndex = this.dataSource.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
    this.table.renderRows();
  }

  getPageSizeOptions() {
    return [10, 20, 30, 40];
  }
  redirect() {
    this.route.navigate(['/apps/add-machines-operations']);
  }
  redirectUpdate() {
    this.route.navigate(['/apps/update-machines-operations']);
  }

  private _searchfilter(value: string): string[] {
    const searchfilterValue = value.toLowerCase();

    return this.searchoption.filter((searchoption) =>
      searchoption.toLowerCase().includes(searchfilterValue)
    );
  }
}
