import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FirebaseAuthentication } from "@ionic-native/firebase-authentication/ngx";
import { IonicModule } from "@ionic/angular";
import { LoginPageRoutingModule } from "./login-routing.module";
import { LoginPage } from "./login.page";
import { GooglePlus } from "@ionic-native/google-plus/ngx";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [LoginPage],
  providers: [FirebaseAuthentication, GooglePlus]
})
export class LoginPageModule {}
