import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-vat-rate',
  templateUrl: './vat-rate.component.html',
  styleUrls: ['./vat-rate.component.css'],
})
export class VatRateComponent {
  form: FormGroup;
  vatResponse: any[] = [];
  constructor(
    private fb: FormBuilder,
    private httpService: HttpServiceService
  ) {
    this.getVatRates();
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
    const getId = this.vatResponse[index];
    console.log(getId);
    this.httpService.deleteVAT(getId?._id).subscribe(
      (res: any) => {
        console.log(res, 'del res');
        this.httpService.openSnackBar(res, 'Close');
        this.getVatRates();
      },
      (error) => {
        console.log(error);
        this.httpService.openSnackBar(error.message, 'close');
      }
    );
  }

  getVatRates() {
    this.httpService.getVat().subscribe((res: any) => {
      this.vat.clear();
      this.vatResponse = res;

      const vatEdit = res;
      for (let i = 0; i < vatEdit.length; i++) {
        const element = vatEdit[i];
        const vatForm = this.fb.group({
          name: [element.name, Validators.required],
        });
        this.vat.push(vatForm);
      }
    });
  }

  submit() {
    const formArray = this.form.get('vatRate') as FormArray;
    const arrayOfObjects = formArray.controls.map((control) => {
      const currencyGroup = control as FormGroup;
      return currencyGroup.value;
    });

    this.httpService.addVAT(arrayOfObjects).subscribe(
      (res: any) => {
        console.log(res, 'del res');
        this.httpService.openSnackBar(res, 'Close');
        this.getVatRates();
      },
      (error) => {
        console.log(error);
        this.httpService.openSnackBar(error.message, 'close');
      }
    );
  }
}
