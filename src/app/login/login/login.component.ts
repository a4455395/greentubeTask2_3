import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {User} from "./user.interface";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.user = {
      email: '',
      password: ''
    }
  }

  login(model: User, isValid: boolean) {
    console.log(model, isValid);
    this.toastr.success('You are awesome!', 'Success!');

  }

}
