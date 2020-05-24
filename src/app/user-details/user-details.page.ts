import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.page.html",
  styleUrls: ["./user-details.page.scss"]
})
export class UserDetailsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  userImage: any = null;

  openImageInput(imageInput) {
    imageInput.getInputElement().then(inputEl => {
      inputEl.click();
    });
  }

  imageSelected(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.userImage = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    let fileList: FileList = event.target.files;
    let file: File = fileList[0];
    console.log(file);
  }
}
