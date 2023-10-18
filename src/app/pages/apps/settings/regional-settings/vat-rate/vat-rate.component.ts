import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-vat-rate',
  templateUrl: './vat-rate.component.html',
  styleUrls: ['./vat-rate.component.css'],
})
export class VatRateComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      vatRate: this.fb.array([
        this.fb.group({
          name: ['', Validators.required],
        }),
      ]),
    });
  }

  // Create a getter for the currencies FormArray
  get vat() {
    return this.form.controls['vatRate'] as FormArray;
  }

  // Add a new currency control to the FormArray
  addVatRate(): void {
    const vatForm = this.fb.group({
      name: ['', Validators.required],
    });
    this.vat.push(vatForm);
  }

  // Remove a currency control from the FormArray
  removeVatRate(index: number): void {
    this.vat.removeAt(index);
    console.log('FormArray length:', this.vat.length);
  }
}
