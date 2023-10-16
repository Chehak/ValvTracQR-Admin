import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-vat-rate',
  templateUrl: './vat-rate.component.html',
  styleUrls: ['./vat-rate.component.css'],
})
export class VatRateComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      vatRate: this.fb.array([]),
    });
  }

  // Create a getter for the currencies FormArray
  get vatRate() {
    return this.form.get('vatRate') as FormArray;
  }

  // Add a new currency control to the FormArray
  addVatRate() {
    this.vatRate.push(this.fb.control(''));
    console.log('FormArray length:', this.vatRate.length);
  }

  // Remove a currency control from the FormArray
  removeVatRate(index: number) {
    this.vatRate.removeAt(index);
    console.log('FormArray length:', this.vatRate.length);
  }
}
