import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  isSignInVisible: boolean = false;
  isSignUpVisible: boolean = false;

  toggleSignIn () {
    this.isSignInVisible = !this.isSignInVisible;
  }

  toggleSignUp () {
    this.isSignUpVisible = !this.isSignUpVisible;
  }
}
