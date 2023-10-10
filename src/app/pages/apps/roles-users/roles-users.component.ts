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
  imagePath: string;
}

const roles = [
  {
    id: 1,
    RoleName: 'UI/UX Designer',
    DateOfJoining: new Date('01-2-2020'),

    imagePath: 'assets/images/profile/user-2.jpg',
  },
  {
    id: 2,
    RoleName: 'Web Designer',
    imagePath: 'assets/images/profile/user-3.jpg',
  },
  {
    id: 3,
    RoleName: 'Content Writer',

    imagePath: 'assets/images/profile/user-4.jpg',
  },
  {
    id: 4,
    RoleName: 'SEO Expert',

    imagePath: 'assets/images/profile/user-5.jpg',
  },
  {
    id: 5,
    RoleName: 'Production Manager',

    imagePath: 'assets/images/profile/user-6.jpg',
  },
  {
    id: 6,
    RoleName: 'Sales Head',

    imagePath: 'assets/images/profile/user-7.jpg',
  },
  {
    id: 7,
    RoleName: 'Business Analyst',

    imagePath: 'assets/images/profile/user-3.jpg',
  },
  {
    id: 8,
    RoleName: 'Head of department',

    imagePath: 'assets/images/profile/user-6.jpg',
  },
  {
    id: 9,
    RoleName: 'System Analyst',

    imagePath: 'assets/images/profile/user-5.jpg',
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
  displayedColumns: string[] = ['#', 'role name', 'action'];
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
      imagePath: row_obj.imagePath,
    });
    this.dialog.open(AddComponent);
    this.table.renderRows();
  }

  // tslint:disable-next-line - Disables all
  updateRowData(row_obj: Roles): boolean | any {
    this.dataSource.data = this.dataSource.data.filter((value: any) => {
      if (value.id === row_obj.id) {
        value.RoleName = row_obj.RoleName;
        value.imagePath = row_obj.imagePath;
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

    if (this.local_data.imagePath === undefined) {
      this.local_data.imagePath = 'assets/images/profile/user-1.jpg';
    }
  }

  doAction(): void {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }
  closeDialog(): void {
    this.dialogRef.close({ event: 'Cancel' });
  }

  selectFile(event: any): void {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      // this.msg = 'You must select an image';
      return;
    }
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.msg = "Only images are supported";
      return;
    }
    // tslint:disable-next-line - Disables all
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    // tslint:disable-next-line - Disables all
    reader.onload = (_event) => {
      // tslint:disable-next-line - Disables all
      this.local_data.imagePath = reader.result;
    };
  }
}
