import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css'],
})
export class UnitsComponent {
  form: FormGroup;
  activeButtonIndex: number = -1;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpServiceService
  ) {
    this.getUnits();
    this.form = this.fb.group({
      units: this.fb.array([
        this.fb.group({
          name: ['', Validators.required],
          default: ['', Validators.required],
        }),
      ]),
    });
  }

  // Create a getter for the currencies FormArray
  get unit() {
    return this.form.controls['units'] as FormArray;
  }

  // Add a new currency control to the FormArray
  addUnit(): void {
    const unitForm = this.fb.group({
      name: ['', Validators.required],
      default: ['', Validators.required],
    });
    this.unit.push(unitForm);
  }

  getUnits() {
    this.httpService.getUnits().subscribe((res: any) => {
      const featEdit = res;
      for (let i = 0; i < featEdit.length; i++) {
        const val = featEdit[i];
        const currForm = this.fb.group({
          name: [val.name, Validators.required],
          default: [val.default, Validators.required],
        });
        this.unit.push(currForm);
      }
    });
  }

  // Remove a currency control from the FormArray
  removeUnit(index: number): void {
    this.unit.removeAt(index);
    console.log('FormArray length:', this.unit.length);
  }

  action(index: number) {
    if (this.activeButtonIndex !== -1) {
      // Deactivate the previously active button
      this.unit.at(this.activeButtonIndex)?.get('default')?.setValue(false);
    }

    // Activate the clicked button
    this.unit.at(index).get('default')?.setValue(true);
    this.activeButtonIndex = index;
  }

  submit() {
    const formArray = this.form.get('units') as FormArray;
    const arrayOfObjects = formArray.controls.map((control) => {
      const currencyGroup = control as FormGroup;
      return currencyGroup.value;
    });

    this.httpService.addUnit(arrayOfObjects).subscribe((res: any) => {
      console.log(res);
    });
  }
}
