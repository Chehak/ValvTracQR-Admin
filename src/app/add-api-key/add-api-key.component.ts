import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { HttpServiceService } from '../services/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-api-key',
  templateUrl: './add-api-key.component.html',
  styleUrls: ['./add-api-key.component.css'],
})
export class AddApiKeyComponent {
  form!: FormGroup;
  apiKey: any;
  selected: any = 'active';
  constructor(
    private fb: FormBuilder,
    private service: HttpServiceService,
    private route: Router
  ) {
    this.apiKey = uuidv4();

    this.form = this.fb.group({
      api: [this.apiKey, Validators.required],
      status: ['', Validators.required],
      products: [false, Validators.required],
      orders: [false, Validators.required],
      files: [false, Validators.required],
      clients: [false, Validators.required],
    });
  }
  getValue(event: any, type: string) {
    console.log(event, type);
  }

  submit() {
    const form = this.form.value;

    if (!this.form.valid) {
      this.form.markAllAsTouched();
    } else {
      this.service.addApiKey(form).subscribe((res: any) => {
        console.log(res, 'res');
        console.log(res.headers);
        if ((res.code = 200)) {
          this.service.openSnackBar('Api Key added successfully !', 'Close');
        }
        this.form.reset();
        this.route.navigate(['apps/api-keys']);
      });
    }
  }
}
