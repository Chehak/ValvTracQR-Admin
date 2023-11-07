import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css'],
})
export class CurrenciesComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpServiceService
  ) {
    this.getCurrencies();
    this.form = this.fb.group({
      currencies: this.fb.array([
        this.fb.group({
          currency: ['', Validators.required],
          default: ['', Validators.required],
        }),
      ]),
    });
  }

  // Create a getter for the currencies FormArray
  get curr() {
    return this.form.controls['currencies'] as FormArray;
  }

  // Add a new currency control to the FormArray
  addCurrency(curr?: string): void {
    console.log(curr);

    const currForm = this.fb.group({
      currency: [curr, Validators.required],
      default: [curr, Validators.required],
    });
    this.curr.push(currForm);
  }

  // Remove a currency control from the FormArray
  removeCurrency(index: number): void {
    this.curr.removeAt(index);
    console.log('FormArray length:', this.curr.length);
  }

  getCurrencies() {
    this.httpService.getCurrencies().subscribe((res: any) => {
      console.log(res, 'res');
      this.curr.clear();

      const featEdit = res;
      for (let i = 0; i < featEdit.length; i++) {
        const val = featEdit[i];
        const currForm = this.fb.group({
          currency: [val.name, Validators.required],
          default: [val.default, Validators.required],
        });
        this.curr.push(currForm);
      }
    });
  }

  submit() {
    console.log(this.form.controls['currencies'].value);
  }
}
