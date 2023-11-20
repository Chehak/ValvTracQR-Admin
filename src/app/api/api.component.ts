import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

export interface Keys {
  id: number;
  Key: string;
  Products: boolean;
  Orders: boolean;
  Files: boolean;
  Client: boolean;
  Status: string;
}

const key = [
  {
    id: 1,
    Key: 'VWk1aW10Q2F4dDFoZDlJa1BfWGw1M01hVEtEMUNfLWs=-india',
    Products: true,
    Orders: true,
    Files: true,
    Client: true,
    Status: 'yes',
  },
  {
    id: 2,
    Key: 'VWk1aW10Q2F4dDFoZDlJa1BfWGw1M01hVEtEMUNfLWs=-india',
    Products: false,
    Orders: true,
    Files: true,
    Client: true,
    Status: 'no',
  },
];
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

  // dynamicColumns: string[] = ['firstname', 'lastname'];

  dataSource = new MatTableDataSource(key);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator =
    Object.create(null);

  constructor(
    private router: Router,
    private translateService: TranslateService
  ) {
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
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  redirectAdd() {
    this.router.navigate(['/apps/add-api-keys']);
  }
  redirectUpdate() {
    this.router.navigate(['/apps/update-api-keys']);
  }
}
