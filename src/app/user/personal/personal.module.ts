import { PersonalRoutingModule } from './personal-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MaterialAppModule } from 'src/app/ngmaterial.module';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    MaterialAppModule
  ]
})
export class PersonalModule { }
