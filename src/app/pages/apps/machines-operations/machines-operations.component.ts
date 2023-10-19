import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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
  ];
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

  // applyFilter(filterValue: string): void {
  //   setTimeout(() => {
  //     this.service.searhRole(filterValue).subscribe(
  //       (res: any) => {
  //         this.dataSource = res;
  //       },
  //       (error) => {
  //         this.service.openSnackBar(error.error.error, 'Close');
  //         this.dataSource = new MatTableDataSource(this.roles);
  //       }
  //     );
  //   }, 2000);
  // }

  // openDialog(action: string, obj: any): void {
  //   obj.action = action;
  //   console.log(obj, 'obj');

  //   const dialogRef = this.dialog.open(AppRolesDialogComponent, {
  //     data: obj,
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result.event === 'Add') {
  //       this.addRole(result.data);
  //     } else if (result.event === 'Update') {
  //       this.updateRole(result.data);
  //     } else if (result.event === 'Delete') {
  //       this.deleteRole(result.data);
  //     }
  //   });
  // }

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

  // Delete Role
  // deleteRole(form: any) {
  //   this.service.deleteRole(form).subscribe(
  //     (res: any) => {
  //       console.log(res, 'del res');

  //       this.service.openSnackBar(res, 'Close');
  //       this.getRoles();
  //     },
  //     (error) => {
  //       console.log(error);
  //       this.service.openSnackBar(error.message, 'close');
  //     }
  //   );
  // }
}
