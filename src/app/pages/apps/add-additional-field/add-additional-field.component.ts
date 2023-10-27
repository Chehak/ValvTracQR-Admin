import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-add-additional-field',
  templateUrl: './add-additional-field.component.html',
  styleUrls: ['./add-additional-field.component.css'],
})
export class AddAdditionalFieldComponent {
  filterControl = new FormControl('');
  searchoption: string[] = ['One', 'Two', 'Three'];
  searchfilteredOptions!: Observable<string[]>;

  ngAfterViewInit(): void {
    this.searchfilteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._searchfilter(value || ''))
    );
  }

  private _searchfilter(value: string): string[] {
    const searchfilterValue = value.toLowerCase();

    return this.searchoption.filter((searchoption) =>
      searchoption.toLowerCase().includes(searchfilterValue)
    );
  }
}
