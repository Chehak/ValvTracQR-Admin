import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, map, startWith, Subject, debounceTime } from 'rxjs';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TranslateService } from '@ngx-translate/core';

import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  position: number;
  total_orders: string;
  total_uncomplete_orders: string;
  no_of_orders: string;
  no_of_uncomplete_orders: string;
  name: string;
  active: string;
  address: string;
  city: string;
  postal_code: string;
  phone: string;
  tin: string;
  web_page: string;
  comments: string;
}
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  active: string = 'yes';
  addClient!: FormGroup;
  editClient!: FormGroup;
  selection = new SelectionModel<PeriodicElement>(true, []);
  isSidebarOpen = false;
  isSidebarOpenEdit = false;
  data: any[] = [];
  dataSource = new MatTableDataSource<PeriodicElement>(this.data);
  lang: any;
  @ViewChild('table') table!: MatTable<PeriodicElement>;
  displayedColumnsr: string[] = [
    'status',
    'id',
    'days_left',
    'product',
    'product_done_all',
    'task',
    'total_net',
    'notes_for_all',
  ];
  displayedColumnsinv: string[] = [
    'release_number',
    'inventory',
    'release_type',
    'identification',
    'date',
    'comment',
  ];
  datay: string[] = [];
  datainv: string[] = [];
  displayedColumns: string[] = [
    'position',
    'total_orders',
    'total_uncomplete_orders',
    'no_of_orders',
    'no_of_uncomplete_orders',
    'name',
    'active',
    'address',
    'city',
    'postal_code',
    'phone',
    'tin',
    'web_page',
    'comments',
    'action',
  ];
  // dataSource = ELEMENT_DATA;
  dragDisabled = true;
  filterControl = new FormControl('');
  searchoption: string[] = ['Default Group'];
  searchfilteredOptions!: Observable<string[]>;
  private subjectKeyUpName = new Subject<any>();
  private subjectKeyUpAddress = new Subject<any>();
  private subjectKeyUpCity = new Subject<any>();
  private subjectKeyUpWeb = new Subject<any>();
  private subjectKeyUpComment = new Subject<any>();
  private subjectKeyUpTax = new Subject<any>();
  private subjectKeyUpPostalCode = new Subject<any>();
  private subjectKeyUpPhone = new Subject<any>();

  constructor(
    public dialog: MatDialog,
    public service: HttpServiceService,
    private route: Router,
    private translateService: TranslateService,
    private fb: FormBuilder
  ) {
    this.getClients();
    this.lang = localStorage.getItem('lang');
    this.translateService.use(this.lang);

    this.addClient = this.fb.group({
      name: ['', Validators.required],
      active: [this.active],
      address: [],
      tax: [],
      city: [],
      email: [],
      phone: [],
      postal: [],
      web: [],
      comments: [],
    });

    this.editClient = this.fb.group({
      name: ['', Validators.required],
      active: [this.active],
      address: [],
      tax: [],
      city: [],
      email: [],
      phone: [],
      postal: [],
      web: [],
      comments: [],
    });
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
    this.route.navigate(['/apps/add-additional-fields']);
  }
  redirectUpdate(id: string) {
    this.route.navigate([`/apps/update-additional-fields/${id}`]);
  }

  private _searchfilter(value: string): string[] {
    const searchfilterValue = value.toLowerCase();

    return this.searchoption.filter((searchoption) =>
      searchoption.toLowerCase().includes(searchfilterValue)
    );
  }

  getClients() {
    this.service.getClients().subscribe((res: any) => {
      console.log(res, 'response');
      this.data = res;
    });
  }

  isAllSelected(): any {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.style.right = sidebar.style.right === '0px' ? '-400px' : '0px';
    }
  }
  editValues: any;
  toggleSidebarEdit(id: any): void {
    this.service.getClientId(id).subscribe((res: any) => {
      if ((res.status = 200)) {
        this.editValues = res;
        this.editClient.patchValue(res);
      }
    });
    this.isSidebarOpenEdit = !this.isSidebarOpenEdit;
    const sidebar = document.getElementById('sidebarEdit');
    if (sidebar) {
      sidebar.style.right = sidebar.style.right === '0px' ? '-900px' : '0px';
    }
  }

  closeSidebar(): void {
    console.log('clickes');

    this.isSidebarOpen = false;
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.style.right = '-400px';
    }
  }

  closeSidebarEdit(): void {
    console.log('clickes');

    this.isSidebarOpenEdit = false;
    const sidebar = document.getElementById('sidebarEdit');
    if (sidebar) {
      sidebar.style.right = '-900px';
    }
  }

  isActive: boolean = true;
  isInactive: boolean = false;

  setActive() {
    this.active = 'yes';
    this.isActive = true;
    this.isInactive = false;
  }

  setInactive() {
    this.active = 'no';
    this.isInactive = true;
    this.isActive = false;
  }

  add() {
    const form = this.addClient.value;

    if (!this.addClient.valid) {
      this.addClient.markAllAsTouched();
    } else {
      this.service.addClient(form).subscribe(
        (res: any) => {
          this.service.openSnackBar('Client Added Successfully', 'Close');
          this.closeSidebar();
          this.getClients();
        },
        (error) => {
          this.service.openSnackBar(error.error.error, 'Close');
          this.dataSource = new MatTableDataSource(this.data);
        }
      );
    }
  }

  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  deleteClient(id: string) {
    if (confirm('Are you sure to delete ')) {
      this.service.deleteClient(id).subscribe(
        (res: any) => {
          console.log(res, 'del res');
          this.service.openSnackBar(res, 'Close');
          this.getClients();
          if (this.isSidebarOpenEdit) {
            // this.closeSidebarEdit();
          }
        },
        (error) => {
          console.log(error);
          this.service.openSnackBar(error.message, 'close');
        }
      );
    }
  }

  onSearchName(filterValue: any) {
    // this.applyFilterCurrency(filterValue);
    if (!filterValue) {
      this.getClients();
    } else {
      this.subjectKeyUpName.next(filterValue);
    }
  }

  onSearchAddress(filterValue: any) {
    // this.applyFilterCurrency(filterValue);
    if (!filterValue) {
      this.getClients();
    } else {
      this.subjectKeyUpAddress.next(filterValue);
    }
  }

  onSearchCity(filterValue: any) {
    // this.applyFilterCurrency(filterValue);
    if (!filterValue) {
      this.getClients();
    } else {
      this.subjectKeyUpCity.next(filterValue);
    }
  }

  onSearchPostalCode(filterValue: any) {
    // this.applyFilterCurrency(filterValue);
    if (!filterValue) {
      this.getClients();
    } else {
      this.subjectKeyUpPostalCode.next(filterValue);
    }
  }

  onSearchTax(filterValue: any) {
    // this.applyFilterCurrency(filterValue);
    if (!filterValue) {
      this.getClients();
    } else {
      this.subjectKeyUpTax.next(filterValue);
    }
  }

  onSearchWeb(filterValue: any) {
    // this.applyFilterCurrency(filterValue);
    if (!filterValue) {
      this.getClients();
    } else {
      this.subjectKeyUpWeb.next(filterValue);
    }
  }

  onSearchPhone(filterValue: any) {
    // this.applyFilterCurrency(filterValue);
    if (!filterValue) {
      this.getClients();
    } else {
      this.subjectKeyUpPhone.next(filterValue);
    }
  }

  onSearchComment(filterValue: any) {
    // this.applyFilterCurrency(filterValue);
    if (!filterValue) {
      this.getClients();
    } else {
      this.subjectKeyUpComment.next(filterValue);
    }
  }

  ngOnInit(): void {
    this.subjectKeyUpName.pipe(debounceTime(1000)).subscribe((d) => {
      this.applyFilterName(d);
    });
    this.subjectKeyUpAddress.pipe(debounceTime(1000)).subscribe((d) => {
      this.applyFilterAddress(d);
    });
    this.subjectKeyUpCity.pipe(debounceTime(1000)).subscribe((d) => {
      this.applyFilterCity(d);
    });
    this.subjectKeyUpPhone.pipe(debounceTime(1000)).subscribe((d) => {
      this.applyFilterPhone(d);
    });
    this.subjectKeyUpWeb.pipe(debounceTime(1000)).subscribe((d) => {
      this.applyFilterWeb(d);
    });
    this.subjectKeyUpComment.pipe(debounceTime(1000)).subscribe((d) => {
      this.applyFilterComment(d);
    });
    this.subjectKeyUpTax.pipe(debounceTime(1000)).subscribe((d) => {
      this.applyFilterTax(d);
    });
    this.subjectKeyUpPostalCode.pipe(debounceTime(1000)).subscribe((d) => {
      this.applyFilterPostalCode(d);
    });
  }

  applyFilterName(filterValue: string): void {
    setTimeout(() => {
      this.service.searchClientName(filterValue).subscribe(
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

  applyFilterAddress(filterValue: string): void {
    setTimeout(() => {
      this.service.searchClientAddress(filterValue).subscribe(
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
  applyFilterCity(filterValue: string): void {
    setTimeout(() => {
      this.service.searchClientCity(filterValue).subscribe(
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
  applyFilterWeb(filterValue: string): void {
    setTimeout(() => {
      this.service.searchClientWeb(filterValue).subscribe(
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
  applyFilterComment(filterValue: string): void {
    setTimeout(() => {
      this.service.searchClientComment(filterValue).subscribe(
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
  applyFilterTax(filterValue: string): void {
    setTimeout(() => {
      this.service.searchClientTax(filterValue).subscribe(
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
  applyFilterPostalCode(filterValue: string): void {
    setTimeout(() => {
      this.service.searchClientPostalCode(filterValue).subscribe(
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

  applyFilterPhone(filterValue: string): void {
    setTimeout(() => {
      this.service.searchClientPhone(filterValue).subscribe(
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
      this.getClients();
    } else {
      setTimeout(() => {
        this.service.searchClientActive(filterValue).subscribe(
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

  update() {
    const form = this.editClient.value;
    form.id = this.editValues?._id;
    if (!this.editClient.valid) {
      this.editClient.markAllAsTouched();
    } else {
      this.service.updateClient(form).subscribe(
        (res: any) => {
          this.service.openSnackBar('Client Updated Successfully', 'Close');
          this.closeSidebarEdit();
          this.getClients();
        },
        (error) => {
          this.service.openSnackBar(error.error.error, 'Close');
          this.dataSource = new MatTableDataSource(this.data);
        }
      );
    }
  }
}
