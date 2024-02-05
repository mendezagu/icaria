import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SingupComponent } from './auth/singup/singup.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

export const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SingupComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
];
