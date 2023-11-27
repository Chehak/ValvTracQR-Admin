import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-machine-add',
  templateUrl: './machine-add.component.html',
  styleUrls: ['./machine-add.component.css'],
})
export class MachineAddComponent {
  currencies: any[] = [];
  formBasic!: FormGroup;
  formAdvanced!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: HttpServiceService,
    private route: Router
  ) {
    this.getCurrenciesList();
    this.formBasic = this.fb.group({
      name: ['', Validators.required],
      active: ['yes', Validators.required],
      end_machine: ['no'],
      notes: [''],
    });
    this.formAdvanced = this.fb.group({
      price: [''],
      currency: [''],
      shift: ['1'],
      hour: ['1'],
    });
  }

  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  getCurrenciesList() {
    this.service.getCurrencies().subscribe((res: any) => {
      this.currencies = res;
      const curr = res.find((el: any) => el?.default == true);
      this.formAdvanced.get('currency')?.setValue(curr?._id);
    });
  }

  saveBasic() {
    const form: any = {
      ...this.formBasic.value,
      ...this.formAdvanced.value,
    };
    if (!this.formBasic.valid) {
      this.formBasic.markAllAsTouched();
    } else {
      this.service.addMachine(form).subscribe((res: any) => {
        if ((res.status = 200)) {
          this.route.navigate(['/apps/machines-operations']);
        }
      });
    }
  }

  saveSimilarBasic() {
    const form: any = {
      ...this.formBasic.value,
      ...this.formAdvanced.value,
    };
    if (!this.formBasic.valid) {
      this.formBasic.markAllAsTouched();
    } else {
      this.service.addMachine(form).subscribe((res: any) => {
        this.formBasic.patchValue(res);
        this.formAdvanced.patchValue(res);
      });
    }
  }

  saveAdvanced() {
    const form: any = {
      ...this.formBasic.value,
      ...this.formAdvanced.value,
    };
    this.service.addMachine(form).subscribe((res: any) => {
      console.log(res);
    });
  }

  saveSimilarAdvanced() {
    const form: any = {
      ...this.formBasic.value,
      ...this.formAdvanced.value,
    };
    if (!this.formBasic.valid) {
      this.formBasic.markAllAsTouched();
    } else {
      this.service.addMachine(form).subscribe((res: any) => {
        this.formBasic.patchValue(res);
        this.formAdvanced.patchValue(res);
      });
    }
  }
}
