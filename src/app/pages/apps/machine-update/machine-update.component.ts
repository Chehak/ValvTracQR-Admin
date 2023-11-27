import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-machine-update',
  templateUrl: './machine-update.component.html',
  styleUrls: ['./machine-update.component.css'],
})
export class MachineUpdateComponent {
  currencies: any[] = [];
  formBasic!: FormGroup;
  formAdvanced!: FormGroup;
  id: any;
  constructor(
    private router: ActivatedRoute,
    private service: HttpServiceService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.id = this.router.snapshot.paramMap.get('id');
    if (this.id) {
      this.getValues();
    }
    this.getCurrenciesList();
    this.formBasic = this.fb.group({
      id: [this.id],
      name: ['', Validators.required],
      active: ['yes', Validators.required],
      end_machine: ['no'],
      notes: [''],
    });
    this.formAdvanced = this.fb.group({
      id: [this.id],
      price: [''],
      currency: [''],
      shift: ['1'],
      hour: ['1'],
    });
  }

  getValues() {
    this.service.getMachineId(this.id).subscribe((res: any) => {
      console.log(res, 'res');
      this.formBasic.patchValue(res);
      this.formAdvanced.patchValue(res);
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
      this.service.updateMachine(form).subscribe((res: any) => {
        if ((res.status = 200)) {
          this.service.openSnackBar('Record Updated', 'Close');
          this.route.navigate(['/apps/machines-operations']);
        }
      });
    }
  }
  saveAdvanced() {
    const form: any = {
      ...this.formBasic.value,
      ...this.formAdvanced.value,
    };
    this.service.updateMachine(form).subscribe((res: any) => {
      if ((res.status = 200)) {
        this.service.openSnackBar('Record Updated', 'Close');
        this.route.navigate(['/apps/machines-operations']);
      }
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
}
