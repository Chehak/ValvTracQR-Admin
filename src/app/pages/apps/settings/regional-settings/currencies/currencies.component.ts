import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css'],
})
export class CurrenciesComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      currencies: this.fb.array([]),
    });
  }

  // Create a getter for the currencies FormArray
  get currencies(): FormArray {
    return this.form.get('currencies') as FormArray;
  }

  // Add a new currency control to the FormArray
  addCurrency() {
    this.currencies.push(this.fb.control(''));
  }

  // Remove a currency control from the FormArray
  removeCurrency(index: number) {
    this.currencies.removeAt(index);
  }
}
