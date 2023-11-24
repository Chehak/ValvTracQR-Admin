import { Component, ViewChild } from '@angular/core';
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
import { Observable, map, startWith } from 'rxjs';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TranslateService } from '@ngx-translate/core';

export interface PeriodicElement {
  orderOnSchedule: number;
  assignedTo: string;
  group: string;
  field: string;
}

@Component({
  selector: 'app-additional-fields',
  templateUrl: './additional-fields.component.html',
  styleUrls: ['./additional-fields.component.css'],
})
export class AdditionalFieldsComponent {
  data: any[] = [];
  lang: any;
  @ViewChild('table') table!: MatTable<PeriodicElement>;
  displayedColumns: string[] = [
    'order on schedule',
    'assigned to',
    'group',
    'field',
    'action',
  ];
  // dataSource = ELEMENT_DATA;
  dragDisabled = true;
  filterControl = new FormControl('');
  searchoption: string[] = ['Default Group'];
  searchfilteredOptions!: Observable<string[]>;

  constructor(
    public dialog: MatDialog,
    public service: HttpServiceService,
    private route: Router,
    private translateService: TranslateService
  ) {
    this.getFields();
    this.lang = localStorage.getItem('lang');
    this.translateService.use(this.lang);
  }

  ngAfterViewInit(): void {
    this.searchfilteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._searchfilter(value || ''))
    );
  }

  dropTable(event: CdkDragDrop<PeriodicElement[]>) {
    console.log(event, 'event');

    const prevIndex = this.data.findIndex((d) => d === event.item.data);
    moveItemInArray(this.data, prevIndex, event.currentIndex);

    this.table.renderRows();
    this.updateWithIncrement('order');
  }

  updateWithIncrement(keyToUpdate: string): void {
    this.data.forEach((obj, index) => {
      obj[keyToUpdate] = index + 1;
    });
    this.service.sortField(this.data).subscribe((res: any) => {
      if ((res.status = 200)) {
        this.service.openSnackBar(res, 'Close');
      }
    });
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

  getFields() {
    this.service.getAdditionalFields().subscribe((res: any) => {
      console.log(res, 'response');
      this.data = res;
    });
  }

  deleteField(id: string) {
    if (confirm('Are you sure to delete ')) {
      this.service.deleteField(id).subscribe(
        (res: any) => {
          console.log(res, 'del res');
          this.service.openSnackBar(res, 'Close');
          this.getFields();
        },
        (error) => {
          console.log(error);
          this.service.openSnackBar(error.message, 'close');
        }
      );
    }
  }

  applyFilterAssigned(filterValue: string): void {
    console.log(filterValue);

    if (filterValue == undefined) {
      this.getFields();
    } else {
      setTimeout(() => {
        this.service.searchAssigned(filterValue).subscribe(
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

  applyFilterGroup(filterValue: any): void {
    console.log(filterValue);

    setTimeout(() => {
      this.service.searchGroup(filterValue.option.value).subscribe(
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

  applyFilterField(filterValue: string): void {
    setTimeout(() => {
      this.service.searchField(filterValue).subscribe(
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
}
