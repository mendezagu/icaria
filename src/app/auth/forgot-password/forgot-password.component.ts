import { Component, inject } from '@angular/core';
import { AppLogoComponent } from '../../components/app-logo/app-logo.component';
import { AppButtonComponent } from '../../components/app-button/app-button.component';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/models/services/auth.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    AppLogoComponent,
    AppButtonComponent,
    CustomButtonComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FooterComponent
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  firebaseService = inject(AuthService);

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  sendRecovery() {
    if (this.form.valid) {
      this.firebaseService.sendRecoveryEmail(this.form.value.email);
      console.log('enviado');
    }
  }
}
