import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-update-additional-fields',
  templateUrl: './update-additional-fields.component.html',
  styleUrls: ['./update-additional-fields.component.css'],
})
export class UpdateAdditionalFieldsComponent {
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
