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

export interface Roles {
  id: number;
  RoleName: string;
  userType: string;
}

const roles = [
  {
    id: 1,
    RoleName: 'UI/UX Designer',
    userType: 'Worker',
  },
  {
    id: 2,
    RoleName: 'Web Designer',
    userType: 'Admin',
  },
  {
    id: 3,
    RoleName: 'Content Writer',
    userType: 'Admin',
  },
  {
    id: 4,
    RoleName: 'SEO Expert',
    userType: 'Worker',
  },
  {
    id: 5,
    RoleName: 'Production Manager',
    userType: 'Worker',
  },
  {
    id: 6,
    RoleName: 'Sales Head',
    userType: 'Worker',
  },
  {
    id: 7,
    RoleName: 'Business Analyst',
    userType: 'Admin',
  },
  {
    id: 8,
    RoleName: 'Head of department',
    userType: 'Worker',
  },
  {
    id: 9,
    RoleName: 'System Analyst',
    userType: 'Worker',
  },
];

@Component({
  selector: 'app-roles-users',
  templateUrl: './roles-users.component.html',
  // styleUrls: ['./roles-users.component.css']
})
export class RolesUsersComponent implements AfterViewInit {
  @ViewChild(MatTable, { static: true }) table: MatTable<any> =
    Object.create(null);
  searchText: any;
  displayedColumns: string[] = ['#', 'role name', 'user type', 'action'];
  dataSource = new MatTableDataSource(roles);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator =
    Object.create(null);

  constructor(public dialog: MatDialog, public datePipe: DatePipe) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(action: string, obj: any): void {
    obj.action = action;
    const dialogRef = this.dialog.open(AppRolesDialogComponent, {
      data: obj,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Add') {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  // tslint:disable-next-line - Disables all
  addRowData(row_obj: Roles): void {
    this.dataSource.data.unshift({
      id: roles.length + 1,
      RoleName: row_obj.RoleName,
      userType: row_obj.userType,
    });
    this.dialog.open(AddComponent);
    this.table.renderRows();
  }

  // tslint:disable-next-line - Disables all
  updateRowData(row_obj: Roles): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value: any) => {
      if (value.id === row_obj.id) {
        value.RoleName = row_obj.RoleName;
        value.userType = row_obj.userType;
      }
      return true;
    });
  }

  // tslint:disable-next-line - Disables all
  deleteRowData(row_obj: Roles): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value: any) => {
      return value.id !== row_obj.id;
    });
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

    this.dialogRef.close({ event: this.action, data: this.local_data });
  }
  closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
