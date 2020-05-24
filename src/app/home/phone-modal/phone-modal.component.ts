import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FirebaseAuthentication } from "@ionic-native/firebase-authentication/ngx";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-phone-modal",
  templateUrl: "./phone-modal.component.html",
  styleUrls: ["./phone-modal.component.scss"]
})
export class PhoneModalComponent {
  phoneNumberForm: FormGroup;
  otpForm: FormGroup;
  showOtpInput: boolean = false;
  verficationId: string;

  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private firebaseAuthentication: FirebaseAuthentication,
    private modalCtrl: ModalController
  ) {
    this.phoneNumberForm = this.fb.group({
      phoneNumber: [
        "",
        [Validators.required, Validators.pattern(/^[1-9][0-9]{9}$/)]
      ]
    });
    this.otpForm = this.fb.group({
      otp: ["", [Validators.required, Validators.pattern(/[0-9]{6}/)]]
    });

    this.firebaseAuthentication.onAuthStateChanged().subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  sendOtp() {
    this.loading = true;
    this.phoneNumberForm.get("phoneNumber").disable();
    this.firebaseAuthentication
      .verifyPhoneNumber("+91" + this.phoneNumberForm.value.phoneNumber, 120)
      .then(data => {
        this.showOtpInput = true;
        this.verficationId = data;
        this.loading = false;
      })
      .catch(err => {
        this.phoneNumberForm.get("phoneNumber").enable();
        this.loading = false;
      });
  }

  verifyOtp() {
    this.loading = true;
    this.firebaseAuthentication
      .signInWithVerificationId(this.verficationId, this.otpForm.value.otp)
      .then(data => {
        console.log(data);
        this.loading = false;
        this.dismissModal();
      });
  }
}
