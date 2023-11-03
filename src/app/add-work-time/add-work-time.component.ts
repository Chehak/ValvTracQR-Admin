import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-add-work-time',
  templateUrl: './add-work-time.component.html',
  styleUrls: ['./add-work-time.component.css'],
})
export class AddWorkTimeComponent {
  filterControl = new FormControl('');
  searchoption: string[] = ['One', 'Two', 'Three'];
  searchfilteredOptions!: Observable<string[]>;

  private _searchfilter(value: string): string[] {
    const searchfilterValue = value.toLowerCase();

    return this.searchoption.filter((searchoption) =>
      searchoption.toLowerCase().includes(searchfilterValue)
    );
  }

  ngAfterViewInit(): void {
    this.searchfilteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._searchfilter(value || ''))
    );
  }
}
