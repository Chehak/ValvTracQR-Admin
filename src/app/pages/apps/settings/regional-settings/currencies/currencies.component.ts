import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css'],
})
export class CurrenciesComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      currencies: this.fb.array([
        this.fb.group({
          currency: ['', Validators.required],
        }),
      ]),
    });
  }

  // Create a getter for the currencies FormArray
  get curr() {
    return this.form.controls['currencies'] as FormArray;
  }

  // Add a new currency control to the FormArray
  addCurrency(): void {
    const currForm = this.fb.group({
      currency: ['', Validators.required],
    });
    this.curr.push(currForm);
  }

  // Remove a currency control from the FormArray
  removeCurrency(index: number): void {
    this.curr.removeAt(index);
    console.log('FormArray length:', this.curr.length);
  }
}
