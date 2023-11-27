import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css'],
})
export class AddTagComponent {
  color: string = '#fffff';
  tags!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: HttpServiceService,
    private route: Router
  ) {
    this.tags = this.fb.group({
      name: ['', Validators.required],
      color: ['', Validators.required],
    });
  }

  tagsForm() {
    console.log(this.color, 'color is');

    const form = this.tags.value;
    if (!this.tags.valid) {
      this.tags.markAllAsTouched();
    } else {
      this.service.addTag(form).subscribe((res: any) => {
        console.log(res, 'res');
        if ((res.code = 200)) {
          this.service.openSnackBar('Tag added successfully !', 'Close');
        }
        this.tags.reset();
        this.route.navigate(['apps/tags']);
      });
    }
  }

  colorChange(event: any) {
    console.log(event.target.value, 'event');
    this.color = event.target.value;
  }
}
