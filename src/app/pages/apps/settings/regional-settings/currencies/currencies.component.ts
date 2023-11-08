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
  activeButtonIndex: number = -1;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpServiceService
  ) {
    this.getCurrencies();
    this.form = this.fb.group({
      currencies: this.fb.array([
        this.fb.group({
          name: ['', Validators.required],
          default: [false, Validators.required],
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
      name: [curr, Validators.required],
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
          name: [val.name, Validators.required],
          default: [val.default, Validators.required],
        });
        this.curr.push(currForm);
      }
    });
  }

  submit() {
    const formArray = this.form.get('currencies') as FormArray;
    const arrayOfObjects = formArray.controls.map((control) => {
      const currencyGroup = control as FormGroup;
      return currencyGroup.value;
    });

    this.httpService.addCurrency(arrayOfObjects).subscribe((res: any) => {
      if (res) {
        this.getCurrencies();
      }
    });
  }

  // Update the toggleDefault function to manage the active button
  action(index: number) {
    if (this.activeButtonIndex !== -1) {
      // Deactivate the previously active button
      this.curr.at(this.activeButtonIndex)?.get('default')?.setValue(false);
    }

    // Activate the clicked button
    this.curr.at(index).get('default')?.setValue(true);
    this.activeButtonIndex = index;
  }
}
