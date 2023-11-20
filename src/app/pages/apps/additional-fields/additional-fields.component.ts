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
  assignedTo: string;
  group: string;
  field: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    orderOnSchedule: 1,
    assignedTo: 'Products',
    group: 'Hydrogen',
    field: 'yes',
  },

  {
    orderOnSchedule: 1,
    assignedTo: 'Orders ',
    group: 'Helium',
    field: 'yes',
  },
  {
    orderOnSchedule: 1,
    assignedTo: 'Orders ',
    group: 'Lithium',
    field: 'yes',
  },
  {
    orderOnSchedule: 1,
    assignedTo: 'Orders ',
    group: 'Beryllium',
    field: 'yes',
  },
  {
    orderOnSchedule: 1,
    assignedTo: 'Orders ',
    group: 'Boron',
    field: 'yes',
  },
];

@Component({
  selector: 'app-additional-fields',
  templateUrl: './additional-fields.component.html',
  styleUrls: ['./additional-fields.component.css'],
})
export class AdditionalFieldsComponent {
  lang: any;
  @ViewChild('table') table!: MatTable<PeriodicElement>;
  displayedColumns: string[] = [
    'order on schedule',
    'assigned to',
    'group',
    'field',
    'action',
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
    this.route.navigate(['/apps/add-additional-fields']);
  }
  redirectUpdate() {
    this.route.navigate(['/apps/update-additional-fields']);
  }

  private _searchfilter(value: string): string[] {
    const searchfilterValue = value.toLowerCase();

    return this.searchoption.filter((searchoption) =>
      searchoption.toLowerCase().includes(searchfilterValue)
    );
  }
}
