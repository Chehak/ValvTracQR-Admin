import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-update-api-key',
  templateUrl: './update-api-key.component.html',
  styleUrls: ['./update-api-key.component.css'],
})
export class UpdateApiKeyComponent {
  id: string;
  form: FormGroup;
  apiKey: string = '';
  constructor(
    private fb: FormBuilder,
    private service: HttpServiceService,
    private router: ActivatedRoute,
    private route: Router
  ) {
    this.id = this.router.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.getValues();
    }
    this.form = this.fb.group({
      id: [this.id],
      api: [this.apiKey, Validators.required],
      status: ['', Validators.required],
      products: [false, Validators.required],
      orders: [false, Validators.required],
      files: [false, Validators.required],
      clients: [false, Validators.required],
    });
  }

  getValues() {
    this.service.getApiKeybyId(this.id).subscribe((res: any) => {
      console.log(res, 'res');
      this.apiKey = res.api;
      this.form.patchValue(res);
    });
  }

  submit() {
    const form = this.form.value;
    if (!this.form.valid) {
      this.form.markAllAsTouched();
    } else {
      this.service.updateApiKey(form).subscribe(
        (res) => {
          console.log(res);
          if (res.status == 200) {
            console.log(res, 'res');
            this.service.openSnackBar('Api Key Updated', 'Close');
            this.route.navigate(['/apps/api-keys']);
          }
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
