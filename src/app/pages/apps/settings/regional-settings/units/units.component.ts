import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css'],
})
export class UnitsComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      units: this.fb.array([
        this.fb.group({
          name: ['', Validators.required],
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
    });
    this.unit.push(unitForm);
  }

  // Remove a currency control from the FormArray
  removeUnit(index: number): void {
    this.unit.removeAt(index);
    console.log('FormArray length:', this.unit.length);
  }
}
