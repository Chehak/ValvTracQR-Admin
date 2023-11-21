import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HttpServiceService } from '../services/http-service.service';

export interface Keys {
  id: number;
  Key: string;
  Products: boolean;
  Orders: boolean;
  Files: boolean;
  Client: boolean;
  Status: string;
}

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements AfterViewInit {
  lang: any;
  pageSize: number = 10;
  @ViewChild(MatTable, { static: true }) table: MatTable<any> =
    Object.create(null);
  searchText: any;
  dynamicColumns: string[] = [
    'id',
    'Key',
    'Products',
    'Orders',
    'Files',
    'Client',
    'Status',
    'Actions',
  ];
  data: any[] = [];

  // dynamicColumns: string[] = ['firstname', 'lastname'];

  dataSource = new MatTableDataSource(this.data);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator =
    Object.create(null);

  constructor(
    private router: Router,
    private translateService: TranslateService,
    private service: HttpServiceService
  ) {
    this.getApis();
    console.log('hitted');

    this.switchLanguage(localStorage.getItem('lang'));
  }

  switchLanguage(lang: any) {
    this.translateService.use(lang);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    setTimeout(() => {
      this.service.searchApiKey(filterValue).subscribe(
        (res: any) => {
          this.dataSource = res;
        },
        (error) => {
          this.service.openSnackBar(error.error.error, 'Close');
          this.dataSource = new MatTableDataSource(this.data);
        }
      );
    }, 2000);
  }

  redirectAdd() {
    this.router.navigate(['/apps/add-api-keys']);
  }
  redirectUpdate(id: string) {
    this.router.navigate([`/apps/update-api-keys/${id}`]);
  }

  getApis() {
    this.service.getApiKeys().subscribe((res: any) => {
      console.log(res, 'response');
      this.dataSource = res;
      this.data = res;
    });
  }

  deleteApiKey(id: string) {
    if (confirm('Are you sure to delete ')) {
      this.service.deleteAPI(id).subscribe(
        (res: any) => {
          console.log(res, 'del res');
          this.service.openSnackBar(res, 'Close');
          this.getApis();
        },
        (error) => {
          console.log(error);
          this.service.openSnackBar(error.message, 'close');
        }
      );
    }
  }
}
