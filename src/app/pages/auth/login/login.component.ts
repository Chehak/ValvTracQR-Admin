import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';
import { NgIf } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
  ],

  standalone: true,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  inputType: string = 'password';
  inputTypeShop: string = 'password';
  options = this.settings.getOptions();

  constructor(private settings: CoreService, private router: Router) {}

  formManager = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  formShop = new FormGroup({
    unameShop: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    passwordShop: new FormControl('', [Validators.required]),
  });

  get fManager() {
    return this.formManager.controls;
  }

  get fShop() {
    return this.formShop.controls;
  }

  submitManager() {
    this.router.navigate(['/dashboard/dashboard-view']);
  }
  submitShop() {
    this.router.navigate(['/dashboard/dashboard-view']);
  }
}
