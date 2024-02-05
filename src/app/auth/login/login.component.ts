import { Component, inject } from '@angular/core';
import { AppLogoComponent } from '../../components/app-logo/app-logo.component';
import { AppButtonComponent } from '../../components/app-button/app-button.component';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { AuthService } from '../../core/models/services/auth.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../core/models/user.model';
import { UtilsService } from '../../core/models/services/utils.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    AppLogoComponent,
    AppButtonComponent,
    CustomButtonComponent,
    ReactiveFormsModule,
    FormsModule,
    FooterComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  utilsService = inject(UtilsService);
  firebaseService = inject(AuthService);

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit() {}

  submit() {
    this.firebaseService.signIn(this.form.value as User).then((res) => {
      console.log(res, 'hola');
    });
  }

  toSignUp() {
    this.utilsService.routerLink('/signup');
  }

  toForgotPass() {
    this.utilsService.routerLink('/forgot-password');
  }
}
