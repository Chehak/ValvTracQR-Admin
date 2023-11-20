import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TranslateService } from '@ngx-translate/core';

export interface PeriodicElement {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  items: any[] = [];
  lang: any;
  dataSource = new MatTableDataSource(this.items);
  constructor(
    public dialog: MatDialog,
    public service: HttpServiceService,
    private route: Router,
    private translateService: TranslateService
  ) {
    this.lang = localStorage.getItem('lang');
    this.translateService.use(this.lang);
  }

  @ViewChild('table') table!: MatTable<PeriodicElement>;
  displayedColumns: string[] = ['id', 'name', 'color', 'action'];

  getPageSizeOptions() {
    return [10, 20, 30, 40];
  }
  redirect() {
    this.route.navigate(['/apps/add-tags']);
  }
  redirectUpdate(id: string) {
    this.route.navigate([`/apps/update-tags/${id}`]);
  }

  getTags() {
    this.service.getTags().subscribe((res: any) => {
      console.log(res, 'response');
      this.dataSource = res;
    });
  }

  deleteTag(id: string) {
    if (confirm('Are you sure to delete ')) {
      this.service.deleteTag(id).subscribe(
        (res: any) => {
          console.log(res, 'del res');
          this.service.openSnackBar(res, 'Close');
          this.getTags();
        },
        (error) => {
          console.log(error);
          this.service.openSnackBar(error.message, 'close');
        }
      );
    }
  }

  ngOnInit(): void {
    this.getTags();
  }

  applyFilter(filterValue: string): void {
    setTimeout(() => {
      this.service.searchTagName(filterValue).subscribe(
        (res: any) => {
          this.dataSource = res;
        },
        (error) => {
          this.service.openSnackBar(error.error.error, 'Close');
          this.dataSource = new MatTableDataSource(this.items);
        }
      );
    }, 2000);
  }

  applyFilterColor(filterValue: string): void {
    setTimeout(() => {
      this.service.searchTagColor(filterValue).subscribe(
        (res: any) => {
          this.dataSource = res;
        },
        (error) => {
          this.service.openSnackBar(error.error.error, 'Close');
          this.dataSource = new MatTableDataSource(this.items);
        }
      );
    }, 2000);
  }
}
