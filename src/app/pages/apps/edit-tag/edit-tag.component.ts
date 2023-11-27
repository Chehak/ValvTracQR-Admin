import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.css'],
})
export class EditTagComponent {
  color: string = '#fffff';
  tags!: FormGroup;
  id: any;

  constructor(
    private fb: FormBuilder,
    private service: HttpServiceService,
    private router: ActivatedRoute
  ) {
    this.id = this.router.snapshot.paramMap.get('id');
    if (this.id) {
      this.getValues();
    }
    this.tags = this.fb.group({
      name: ['', Validators.required],
      color: [this.color, Validators.required],
    });
  }

  tagsForm() {
    const form: any = {
      id: this.id,
      name: this.tags.controls['name']?.value,
      color: this.color,
    };
    if (!this.tags.valid) {
      this.tags.markAllAsTouched();
    } else {
      this.service.updateTag(form).subscribe((res: any) => {
        console.log(res, 'res');
      });
    }
  }

  getValues() {
    this.service.getTagbyId(this.id).subscribe((res: any) => {
      console.log(res, 'res');
      this.color = res.color;
      this.tags.patchValue(res);
    });
  }

  colorChange(event: any) {
    console.log(event.target.value, 'event');
    this.color = event.target.value;
  }
}
