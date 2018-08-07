import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isSignInVisible = false;
  isSignUpVisible = false;
  isSignedIn = false;

  username: string = null;
  jwtToken: string = null;

  ngOnInit () {
    this.checkLocalStorage();
  }

  checkLocalStorage () {
    let user = window.localStorage.getItem('user');

    if (user) {
      this.isSignedIn = true;
      this.username = user;
      this.jwtToken = window.sessionStorage.accessToken;
    }
  }

  toggleSignIn (data: any) {
    this.isSignInVisible = !this.isSignInVisible;

    if (data) {
      this.username = data.email;
      this.jwtToken = data.token;
      this.isSignedIn = true;
    }
  }

  toggleSignUp () {
    this.isSignUpVisible = !this.isSignUpVisible;
  }

  signOut () {
    this.username = null;
    this.jwtToken = null;
    this.isSignedIn = false;
    window.localStorage.clear();
    window.sessionStorage.clear();
  }
}
