import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-add-additional-field',
  templateUrl: './add-additional-field.component.html',
  styleUrls: ['./add-additional-field.component.css'],
})
export class AddAdditionalFieldComponent {
  fieldForm!: FormGroup;

  filterControl = new FormControl('');
  searchoption: string[] = ['Default Group'];
  searchfilteredOptions!: Observable<string[]>;

  constructor(
    private fb: FormBuilder,
    private service: HttpServiceService,
    private route: Router
  ) {
    this.fieldForm = this.fb.group({
      assigned: ['', Validators.required],
      group: ['', Validators.required],
      field: ['', Validators.required],
    });
  }

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

  submitForm() {
    const form = this.fieldForm.value;

    if (!this.fieldForm.valid) {
      this.fieldForm.markAllAsTouched();
    } else {
      this.service.addAdditionalField(form).subscribe((res: any) => {
        console.log(res, 'res');
        console.log(res.headers);
        if ((res.code = 200)) {
          this.service.openSnackBar('Field added successfully !', 'Close');
        }
        this.fieldForm.reset();
        this.route.navigate(['apps/additional-fields']);
      });
    }
  }
}
