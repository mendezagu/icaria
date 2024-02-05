import { Component, inject } from '@angular/core';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { AppLogoComponent } from '../../components/app-logo/app-logo.component';
import { AppButtonComponent } from '../../components/app-button/app-button.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilsService } from '../../core/models/services/utils.service';
import { AuthService } from '../../core/models/services/auth.service';
import { User } from '../../core/models/user.model';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [
    AppLogoComponent,
    AppButtonComponent,
    CustomButtonComponent,
    ReactiveFormsModule,
    FormsModule,
    FooterComponent
  ],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.scss'
})
export class SingupComponent {
  utilsService = inject(UtilsService)
  firebaseService = inject(AuthService)
  router = inject(Router)


  form = new FormGroup({
    email: new FormControl('',  [Validators.required, Validators.email]),
    password: new FormControl('',  [Validators.required]),
  });


  constructor() { }

  ngOnInit() {
  }

  submit(){

      this.firebaseService.signUp (this.form.value as User).then(res => {
      console.log(res,'registrado');

      }  )
    }

  navigate(){
    this.router.navigate(['login']);
  }

}
