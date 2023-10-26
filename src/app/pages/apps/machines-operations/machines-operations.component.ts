import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { HttpServiceService } from 'src/app/services/http-service.service';

export interface Machines {
  id: number;
  RoleName: string;
  userType: string;
}
@Component({
  selector: 'app-machines-operations',
  templateUrl: './machines-operations.component.html',
  styleUrls: ['./machines-operations.component.css'],
})
export class MachinesOperationsComponent {
  filterControl = new FormControl('');
  searchoption: string[] = ['One', 'Two', 'Three'];
  searchfilteredOptions!: Observable<string[]>;
  limit: number = 10;
  page: number = 1;
  topPage = 0;
  roles: any[] = [];
  totalRecords: number = 0;
  @ViewChild(MatTable, { static: true }) table: MatTable<any> =
    Object.create(null);
  searchText: any;
  displayedColumns: string[] = [
    'order on schedule',
    'shop floor view',
    'name',
    'active',
    'end machine',
    'work hour price',
    'currency',
    'active',
    'action',
  ];
  dataSource = new MatTableDataSource(this.roles);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator =
    Object.create(null);

  constructor(
    public dialog: MatDialog,
    public datePipe: DatePipe,
    public service: HttpServiceService,
    private route: Router
  ) {
    this.getRoles();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.searchfilteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._searchfilter(value || ''))
    );
  }

  paginationOptionChange(event: any) {
    if (event.previousPageIndex < event.pageIndex) {
      this.limit = event.pageSize;
      this.page += 1;
      this.getRoles();
      // console.log('Next button clicked');
    } else if (event.previousPageIndex > event.pageIndex) {
      this.page -= 1;
      this.getRoles();
      // console.log('Previous button clicked');
    }
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
  // Get Roles
  getRoles() {
    const form: any = {
      limit: this.limit,
      page: this.page,
    };
    this.service.getRoles(form).subscribe((resp: any) => {
      this.dataSource = resp.results;
      this.totalRecords = resp.count;
      console.log(resp, 'resp');
    });
  }

  // Add Role
  addRole(form: any) {
    this.service.addRole(form).subscribe(
      (res: any) => {
        this.service.openSnackBar('Role Added Sucessfully', 'Close');
        this.getRoles();
      },
      (error) => {
        console.error('Error:', error);
        this.service.openSnackBar(error.message, 'Close');
      }
    );
  }

  // Update Role
  updateRole(form: any) {
    this.service.updateRole(form).subscribe(
      (res: any) => {
        this.service.openSnackBar('Role Updated Successfully', 'Close');
        this.getRoles();
      },
      (error) => {
        console.log(error);
        this.service.openSnackBar(error.message, 'Close');
      }
    );
  }

  private _searchfilter(value: string): string[] {
    const searchfilterValue = value.toLowerCase();

    return this.searchoption.filter((searchoption) =>
      searchoption.toLowerCase().includes(searchfilterValue)
    );
  }
}
