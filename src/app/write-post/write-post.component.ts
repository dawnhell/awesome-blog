import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

export interface Tags {
  name: string;
}

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css']
})

export class WritePostComponent implements OnInit {
  isSignedIn = false;
  username = null;
  editor: any;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  tags: Tags[] = [
    { name: 'NodeJS' },
    { name: 'Angular' },
    { name: 'Javascript' },
  ];

  titleFormControl = new FormControl('', [
    Validators.required
  ]);
  categoryFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor() { }

  ngOnInit() {
    this.checkJWTToken();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tags): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  checkJWTToken () {
    const user = window.localStorage.getItem('user');

    if (user) {
      this.isSignedIn = true;
      this.username = user;
    }
  }

  publish () {
    const tagsList = [this.tags.map(tag => '"' + tag.name + '"')];
    const post = `
      {{{
        "title": ${this.titleFormControl.value},
        "tags": [${tagsList}],
        "category": ${this.categoryFormControl.value},
        "date": ${moment().format()}
      }}}
    `;
    console.log(post);
  }
}
