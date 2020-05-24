import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomePage } from "./home.page";

import { HomePageRoutingModule } from "./home-routing.module";
import { FirebaseAuthentication } from "@ionic-native/firebase-authentication/ngx";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { PhoneModalComponent } from "./phone-modal/phone-modal.component";
import { AuthService } from "../shared/auth.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [HomePage, PhoneModalComponent],
  providers: [FirebaseAuthentication, AuthService, GooglePlus]
})
export class HomePageModule {}
