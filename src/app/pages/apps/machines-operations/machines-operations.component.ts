import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, map, startWith } from 'rxjs';
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
export class MachinesOperationsComponent implements OnInit {
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
  currencyForm!: FormGroup;
  workHourForm!: FormGroup;
  searchfilteredOptions!: Observable<string[]>;
  lang: any;
  private subjectKeyUp = new Subject<any>();
  private subjectKeyUpName = new Subject<any>();
  constructor(
    public dialog: MatDialog,
    public service: HttpServiceService,
    private route: Router,
    private translateService: TranslateService,
    private fb: FormBuilder
  ) {
    this.getCurrenciesList();
    this.getData();
    this.lang = localStorage.getItem('lang');
    this.translateService.use(this.lang);

    this.currencyForm = this.fb.group({
      currencyEdit: ['', Validators.required],
    });
    this.workHourForm = this.fb.group({
      workHourEdit: ['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
    this.searchfilteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._searchfilter(value || ''))
    );
  }

  dropTable(event: CdkDragDrop<PeriodicElement[]>) {
    const prevIndex = this.data.findIndex((d) => d === event.item.data);
    moveItemInArray(this.data, prevIndex, event.currentIndex);

    this.table.renderRows();
    this.updateWithIncrement('order');
  }

  updateWithIncrement(keyToUpdate: string): void {
    this.data.forEach((obj, index) => {
      obj[keyToUpdate] = index + 1;
    });
    this.service.sortFieldMachines(this.data).subscribe((res: any) => {
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

  togglePopover(popoverId: string, price: number) {
    this.workHourForm.get('workHourEdit')?.setValue(price);
    this.activePopoverIdout = null;

    this.activePopoverId =
      this.activePopoverId === popoverId ? null : popoverId;
  }

  resetWorkEdit(price: number) {
    this.workHourForm.get('workHourEdit')?.setValue(price);
  }

  saveWorkHour(element: any) {
    element.price = this.workHourForm.get('workHourEdit')?.value;
    element.id = element._id;
    // console.log(this.workHourForm.get('workHourEdit')?.value, element);
    this.service.updateMachine(element).subscribe((res: any) => {
      if ((res.status = 200)) {
        this.service.openSnackBar('Work hour price updated', 'Close');
        this.getData();
        this.activePopoverId = null;
        this.activePopoverIdout = null;
      }
    });
  }

  resetCurrencyEdit(curr_id: string) {
    this.currencyForm.get('currencyEdit')?.setValue(curr_id);
  }

  saveCurrency(element: any) {
    element.currency = this.currencyForm.get('currencyEdit')?.value;
    element.id = element._id;
    this.service.updateMachine(element).subscribe((res: any) => {
      if ((res.status = 200)) {
        this.service.openSnackBar('Currency updated', 'Close');
        this.getData();
        this.activePopoverId = null;
        this.activePopoverIdout = null;
      }
    });
  }

  togglePopoverOut(popoverId: string, curr_id: string) {
    this.currencyForm.get('currencyEdit')?.setValue(curr_id);
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
    const el = this.currencies.find((el) => el?._id == id);
    return el?.name;
  }

  deleteRecord(id: string) {
    if (confirm('Are you sure to delete ')) {
      this.service.deleteMachine(id).subscribe(
        (res: any) => {
          // console.log(res, 'del res');
          this.service.openSnackBar(res, 'Close');
          this.getData();
        },
        (error) => {
          // console.log(error);
          this.service.openSnackBar(error.message, 'close');
        }
      );
    }
  }

  applyFilterName(filterValue: string): void {
    setTimeout(() => {
      this.service.searchMachineName(filterValue).subscribe(
        (res: any) => {
          this.data = res;
        },
        (error) => {
          this.service.openSnackBar(error.error.error, 'Close');
          this.data = [];
        }
      );
    }, 2000);
  }

  applyFilterActive(filterValue: string): void {
    console.log(filterValue);

    if (filterValue == undefined) {
      this.getData();
    } else {
      setTimeout(() => {
        this.service.searchMachineActive(filterValue).subscribe(
          (res: any) => {
            this.data = res;
          },
          (error) => {
            this.data = [];
            this.service.openSnackBar(error.error.error, 'Close');
          }
        );
      }, 1000);
    }
  }

  applyFilterEndMachine(filterValue: string): void {
    console.log(filterValue);

    if (filterValue == undefined) {
      this.getData();
    } else {
      setTimeout(() => {
        this.service.searchMachineEnd(filterValue).subscribe(
          (res: any) => {
            this.data = res;
          },
          (error) => {
            this.data = [];
            this.service.openSnackBar(error.error.error, 'Close');
          }
        );
      }, 1000);
    }
  }

  applyFilterWorkHour(filterValue: string): void {
    this.service.searchMachinePrice(filterValue).subscribe(
      (res: any) => {
        this.data = res;
      },
      (error) => {
        this.service.openSnackBar(error.error.error, 'Close');
        this.data = [];
      }
    );
  }

  applyFilterCurrency(filterValue: string): void {
    console.log(filterValue);
    if (filterValue == undefined) {
      this.getData();
    } else {
      setTimeout(() => {
        this.service.searchMachineCurrency(filterValue).subscribe(
          (res: any) => {
            this.data = res;
          },
          (error) => {
            this.data = [];
            this.service.openSnackBar(error.error.error, 'Close');
          }
        );
      }, 1000);
    }
  }

  onSearch(filterValue: any) {
    // this.applyFilterCurrency(filterValue);
    if (!filterValue) {
      this.getData();
    } else {
      this.subjectKeyUp.next(filterValue);
    }
  }

  onSearchName(filterValue: any) {
    // this.applyFilterCurrency(filterValue);
    if (!filterValue) {
      this.getData();
    } else {
      this.subjectKeyUpName.next(filterValue);
    }
  }

  ngOnInit(): void {
    this.subjectKeyUp.pipe(debounceTime(500)).subscribe((d) => {
      this.applyFilterWorkHour(d);
    });
    this.subjectKeyUpName.pipe(debounceTime(500)).subscribe((d) => {
      this.applyFilterName(d);
    });
  }
}
