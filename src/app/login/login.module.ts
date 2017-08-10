import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoginRoutingModule } from './login-routing.module';
import {LoginComponent} from "./login/login.component";
import {ToastModule} from "ng2-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {EmailValidator} from "./login/email-validator.directive";
import {PasswordValidator} from "./login/password-validator.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    LoginRoutingModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
  ],
  declarations: [
    LoginComponent,
    EmailValidator,
    PasswordValidator
  ]
})
export class LoginModule { }
