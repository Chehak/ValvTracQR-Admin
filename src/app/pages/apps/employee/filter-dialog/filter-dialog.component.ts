import { Component } from '@angular/core';
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

interface todos {
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
  constructor(public dialogRef: MatDialogRef<FilterDialogComponent>) {}
  todos: todos[] = [
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

  inprogress: todos[] = [
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
    this.dialogRef.close({ data: this.todos, rows: this.rows });
    console.log(this.todos);
    console.log(this.inprogress);
  }
}
