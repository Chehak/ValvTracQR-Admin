import { Component, Inject } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

interface active {
  id: number;
  title: string;
  columnRef: string;
}
@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css'],
})
export class FilterDialogComponent {
  rows: number = 10;
  constructor(
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(this.data.data, 'data');
  }
  active: active[] = [
    {
      id: 1,
      title: 'Account Type',
      columnRef: 'AccountType',
    },
    {
      id: 2,
      title: 'Default Language',
      columnRef: 'DefaultLanguage',
    },
    {
      id: 3,
      title: 'Active',
      columnRef: 'Active',
    },
    {
      id: 4,
      title: 'Role',
      columnRef: 'Role',
    },
  ];

  hidden: active[] = [
    {
      id: 201,
      title: 'Name',
      columnRef: 'Name',
    },
    {
      id: 202,
      title: 'Email',
      columnRef: 'Email',
    },
    {
      id: 203,
      title: 'Phone',
      columnRef: 'Mobile',
    },
  ];

  drop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  apply() {
    this.dialogRef.close({ data: this.active, rows: this.rows });
    console.log(this.active);
    console.log(this.hidden);
  }
}
