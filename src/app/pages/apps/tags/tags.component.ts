import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface PeriodicElement {
  id: number;
  name: string;
  color: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: 'John',
    color: 'red',
  },

  {
    id: 1,
    name: 'John',
    color: 'red',
  },
  {
    id: 1,
    name: 'John',
    color: 'red',
  },
  {
    id: 1,
    name: 'John',
    color: 'red',
  },
  {
    id: 1,
    name: 'John',
    color: 'red',
  },
];

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  constructor(
    public dialog: MatDialog,
    public service: HttpServiceService,
    private route: Router
  ) {}
  @ViewChild('table') table!: MatTable<PeriodicElement>;
  displayedColumns: string[] = ['id', 'name', 'color', 'action'];
  dataSource = ELEMENT_DATA;

  getPageSizeOptions() {
    return [10, 20, 30, 40];
  }
  redirect() {
    this.route.navigate(['/apps/add-additional-fields']);
  }
  redirectUpdate() {
    this.route.navigate(['/apps/update-additional-fields']);
  }
}
