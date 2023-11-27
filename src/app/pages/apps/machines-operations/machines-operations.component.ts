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
  id: number;
  orderOnSchedule: number;
  shopFloorView: string;
  name: string;
  active: string;
  endMachine: string;
  workHourPrice: number;
  currency: string;
}

@Component({
  selector: 'app-machines-operations',
  templateUrl: './machines-operations.component.html',
  styleUrls: ['./machines-operations.component.css'],
})
export class MachinesOperationsComponent {
  currencies: any[] = [];
  data: any[] = [];
  @ViewChild('table') table!: MatTable<PeriodicElement>;
  displayedColumns: string[] = [
    'order on schedule',
    'name',
    'active',
    'end machine',
    'work hour price',
    'currency',
    'action',
  ];
  // dataSource = ELEMENT_DATA;
  dragDisabled = true;
  activePopoverId: string | null = null;
  activePopoverIdout: string | null = null;
  filterControl = new FormControl('');
  searchoption: any[] = [];
  searchfilteredOptions!: Observable<string[]>;
  lang: any;
  constructor(
    public dialog: MatDialog,
    public service: HttpServiceService,
    private route: Router,
    private translateService: TranslateService
  ) {
    this.getCurrenciesList();
    this.getData();
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
    console.log(event, 'event');

    const prevIndex = this.data.findIndex((d) => d === event.item.data);
    moveItemInArray(this.data, prevIndex, event.currentIndex);

    this.table.renderRows();
    this.updateWithIncrement('order');
  }

  updateWithIncrement(keyToUpdate: string): void {
    this.data.forEach((obj, index) => {
      obj[keyToUpdate] = index + 1;
    });
    this.service.sortField(this.data).subscribe((res: any) => {
      if ((res.status = 200)) {
        this.service.openSnackBar(res, 'Close');
      }
    });
  }

  getPageSizeOptions() {
    return [10, 20, 30, 40];
  }
  redirect() {
    this.route.navigate(['/apps/add-machines-operations']);
  }
  redirectUpdate(id: string) {
    this.route.navigate([`/apps/update-machines-operations/${id}`]);
  }

  private _searchfilter(value: string): string[] {
    const searchfilterValue = value.toLowerCase();

    return this.searchoption.filter((searchoption) =>
      searchoption.toLowerCase().includes(searchfilterValue)
    );
  }

  togglePopover(popoverId: string) {
    this.activePopoverIdout = null;

    this.activePopoverId =
      this.activePopoverId === popoverId ? null : popoverId;
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

  getData() {
    this.service.getMachineOperations().subscribe((res: any) => {
      this.data = res;
    });
  }

  getCurrenciesList() {
    this.service.getCurrencies().subscribe((res: any) => {
      this.currencies = res;
    });
  }

  getCurrencyName(id: string) {
    console.log(id);
    console.log(this.currencies);

    const el = this.currencies.find((el) => el?._id == id);
    return el?.name;
  }

  deleteRecord(id: string) {
    if (confirm('Are you sure to delete ')) {
      this.service.deleteMachine(id).subscribe(
        (res: any) => {
          console.log(res, 'del res');
          this.service.openSnackBar(res, 'Close');
          this.getData();
        },
        (error) => {
          console.log(error);
          this.service.openSnackBar(error.message, 'close');
        }
      );
    }
  }
}
