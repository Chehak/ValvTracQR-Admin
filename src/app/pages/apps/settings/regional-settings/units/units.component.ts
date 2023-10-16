import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css'],
})
export class UnitsComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      units: this.fb.array([]),
    });
  }

  // Create a getter for the currencies FormArray
  get units() {
    return this.form.get('units') as FormArray;
  }

  // Add a new currency control to the FormArray
  addUnit() {
    this.units.push(this.fb.control(''));
    console.log('FormArray length:', this.units.length);
  }

  // Remove a currency control from the FormArray
  removeUnit(index: number) {
    this.units.removeAt(index);
    console.log('FormArray length:', this.units.length);
  }
}
