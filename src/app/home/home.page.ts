import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { PhoneModalComponent } from "./phone-modal/phone-modal.component";
import { AuthService } from "../shared/auth.service";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(
    private modalController: ModalController,
    private auth: AuthService
  ) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: PhoneModalComponent,
      cssClass: "my-custom-class",
      swipeToClose: true
    });
    return await modal.present();
  }

  loginWithGoogle() {
    this.auth.signInWithGoogle();
  }
}
