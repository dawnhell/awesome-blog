import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css']
})
export class WritePostComponent implements OnInit {
  isSignedIn = false;
  username = null;
  editor: any;

  constructor() { }

  ngOnInit() {
    this.checkJWTToken();
  }

  checkJWTToken () {
    let user = window.localStorage.getItem('user');

    if (user) {
      this.isSignedIn = true;
      this.username = user;
    }
  }
}
