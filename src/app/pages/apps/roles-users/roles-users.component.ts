import {
  Component,
  Inject,
  Optional,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { AddComponent } from './add/add.component';
import { HttpServiceService } from 'src/app/services/http-service.service';

export interface Roles {
  id: number;
  RoleName: string;
  userType: string;
}

@Component({
  selector: 'app-roles-users',
  templateUrl: './roles-users.component.html',
  // styleUrls: ['./roles-users.component.css']
})
export class RolesUsersComponent implements AfterViewInit {
  limit: number = 10;
  page: number = 1;
  topPage = 0;
  roles: any[] = [];
  totalRecords: number = 0;
  @ViewChild(MatTable, { static: true }) table: MatTable<any> =
    Object.create(null);
  searchText: any;
  displayedColumns: string[] = ['#', 'role name', 'user type', 'action'];
  dataSource = new MatTableDataSource(this.roles);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator =
    Object.create(null);

  constructor(
    public dialog: MatDialog,
    public datePipe: DatePipe,
    public service: HttpServiceService
  ) {
    this.getRoles();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    setTimeout(() => {
      this.service.searhRole(filterValue).subscribe((res: any) => {
        this.dataSource = res;
      });
    }, 1000);
  }

  openDialog(action: string, obj: any): void {
    obj.action = action;
    console.log(obj, 'obj');

    const dialogRef = this.dialog.open(AppRolesDialogComponent, {
      data: obj,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Add') {
        this.addRole(result.data);
      } else if (result.event === 'Update') {
        this.updateRole(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRole(result.data);
      }
    });
  }

  // tslint:disable-next-line - Disables all
  // addRowData(row_obj: Roles): void {
  //   this.dataSource.data.unshift({
  //     id: roles.length + 1,
  //     RoleName: row_obj.RoleName,
  //     userType: row_obj.userType,
  //   });
  //   this.dialog.open(AddComponent);
  //   this.table.renderRows();
  // }

  // tslint:disable-next-line - Disables all
  // updateRowData(row_obj: Roles): boolean | any {
  //   this.dataSource.data = this.dataSource.data.filter((value: any) => {
  //     if (value.id === row_obj.id) {
  //       value.RoleName = row_obj.RoleName;
  //       value.userType = row_obj.userType;
  //     }
  //     return true;
  //   });
  // }

  // tslint:disable-next-line - Disables all
  // deleteRowData(row_obj: Roles): boolean | any {
  //   this.dataSource.data = this.dataSource.data.filter((value: any) => {
  //     return value.id !== row_obj.id;
  //   });
  // }

  paginationOptionChange(e: any) {
    this.limit = e.pageSize;
    this.page = e.pageIndex * e.pageSize;
    this.getRoles();
  }

  getPageSizeOptions() {
    return [10, 20, 30, 40];
  }

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

  deleteRole(form: any) {
    this.service.deleteRole(form).subscribe(
      (res: any) => {
        this.service.openSnackBar('Role Deleted Sucessfully', 'Close');
        this.getRoles();
      },
      (error) => {
        console.log(error);
        this.service.openSnackBar(error.message, 'close');
      }
    );
  }
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-dialog-content',
  templateUrl: 'roles-dialog-content.html',
})
// tslint:disable-next-line: component-class-suffix
export class AppRolesDialogComponent {
  action: string;
  // tslint:disable-next-line - Disables all
  local_data: any;
  selectedImage: any = '';
  joiningDate: any = '';

  constructor(
    public datePipe: DatePipe,
    public dialogRef: MatDialogRef<AppRolesDialogComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Roles
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  doAction(): void {
    console.log(this.local_data, 'local data');
    this.dialogRef.close({
      event: this.action,
      data: this.local_data,
    });
  }
  closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }

  alphabetOnly(event: any) {
    const charCode = event.which ? event.which : event.keyCode;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      event.preventDefault();
    }
  }
}
