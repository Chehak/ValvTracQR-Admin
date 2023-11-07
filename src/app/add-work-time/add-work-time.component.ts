import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
// import { startOfDay, endOfDay, subDays, subMonths } from 'date-fns';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-work-time',
  templateUrl: './add-work-time.component.html',
  styleUrls: ['./add-work-time.component.css'],
})
export class AddWorkTimeComponent {
  filterControl = new FormControl('');
  searchoption: string[] = ['One', 'Two', 'Three'];
  searchfilteredOptions!: Observable<string[]>;
  bsConfig: Partial<BsDatepickerConfig>;
  selectedRange: Date[] = [];
  displayCustomRanges: boolean = false;
  customRanges: { label: string; range: number }[] = [
    { label: 'Last 7 Days', range: 7 },
    { label: 'Last 30 Days', range: 30 },
    { label: 'This Month', range: 0 },
    { label: 'Last Month', range: -1 },
    // Add more custom ranges as needed
  ];

  constructor() {
    this.bsConfig = Object.assign({}, { containerClass: 'theme-default' });
  }

  openDateRangeModal() {
    this.displayCustomRanges = true;
  }

  closeDateRangeModal() {
    this.displayCustomRanges = false;
  }

  setCustomRange(range: number) {
    const today = new Date();
    const startDate = new Date(today.getTime() - range * 24 * 60 * 60 * 1000);

    if (range === 0) {
      startDate.setDate(1);
    } else if (range === -1) {
      startDate.setMonth(startDate.getMonth() - 1);
      startDate.setDate(1);
    }

    this.selectedRange = [startDate, today];
  }

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
