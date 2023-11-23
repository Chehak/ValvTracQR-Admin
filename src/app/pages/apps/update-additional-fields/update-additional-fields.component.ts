import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, startWith, map } from 'rxjs';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-update-additional-fields',
  templateUrl: './update-additional-fields.component.html',
  styleUrls: ['./update-additional-fields.component.css'],
})
export class UpdateAdditionalFieldsComponent {
  id: any;
  filterControl = new FormControl('');
  searchoption: string[] = ['Default Group'];
  searchfilteredOptions!: Observable<string[]>;
  fieldForm!: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private service: HttpServiceService,
    private route: Router
  ) {
    this.id = this.router.snapshot.paramMap.get('id');
    if (this.id) {
      this.getValues();
    }
    this.fieldForm = this.fb.group({
      id: [this.id],
      assigned: ['', Validators.required],
      group: ['', Validators.required],
      field: ['', Validators.required],
    });
  }

  getValues() {
    this.service.getAdditionalFieldId(this.id).subscribe((res: any) => {
      console.log(res, 'res');
      this.fieldForm.patchValue(res);
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
      this.service.updateAdditionalField(form).subscribe((res: any) => {
        if (res) {
          this.service.openSnackBar('Field Updated Successfully', 'Close');
          this.route.navigate(['apps/additional-fields']);
        }
      });
    }
  }
}
