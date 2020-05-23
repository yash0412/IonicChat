import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FirebaseAuthentication } from "@ionic-native/firebase-authentication/ngx";
import { GooglePlus } from "@ionic-native/google-plus/ngx";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  phoneNumberForm: FormGroup;
  otpForm: FormGroup;
  showOtpInput: boolean = false;
  verficationId: string;
  constructor(
    private fb: FormBuilder,
    private firebaseAuthentication: FirebaseAuthentication,
    private googlePlus: GooglePlus
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

  sendOtp() {
    this.showOtpInput = true;
    this.firebaseAuthentication
      .verifyPhoneNumber("+91" + this.phoneNumberForm.value.phoneNumber, 120)
      .then(data => {
        this.verficationId = data;
      });
  }

  verifyOtp() {
    this.firebaseAuthentication
      .signInWithVerificationId(this.verficationId, this.otpForm.value.otp)
      .then(data => {
        console.log(data);
      });
  }

  signInWithGoogle() {
    this.googlePlus
      .login({})
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  ngOnInit() {}
}
