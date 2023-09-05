import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { AuthRoutes } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { TablerIconsModule } from 'angular-tabler-icons';

MatIconModule;
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ErrorComponent,
  ],
})
export class AuthModule {}
