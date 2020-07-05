import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { PhoneModalComponent } from "./phone-modal/phone-modal.component";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(
    private modalController: ModalController,
    private auth: AuthService,
    private router: Router
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
    this.auth.signInWithGoogle().then(() => {
      this.router.navigate(["user-details"]);
    });
  }
}
