import { Injectable } from "@angular/core";
import { GooglePlus } from "@ionic-native/google-plus/ngx";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private googlePlus: GooglePlus) {}

  signInWithGoogle() {
    this.googlePlus
      .login({})
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }
}
