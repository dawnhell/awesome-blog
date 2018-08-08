import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

import { PostsService } from '../posts.service';
import * as moment from 'moment';

export interface Tags {
  name: string;
}

export class PostErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
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
  showSpinner = false;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  tags: Tags[] = [
    { name: 'NodeJS' },
    { name: 'Angular' },
    { name: 'Javascript' }
  ];

  titleFormControl = new FormControl('', [
    Validators.required
  ]);
  categoryFormControl = new FormControl('', [
    Validators.required
  ]);

  titleFormMatcher = new PostErrorStateMatcher();
  categoryFormMatcher = new PostErrorStateMatcher();

  constructor(private _postService: PostsService, private _router: Router) { }

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
    const post =
`{{{
  "title": "${this.titleFormControl.value}",
  "tags": [${tagsList}],
  "category": "${this.categoryFormControl.value}",
  "date": "${moment().format()}"
}}}

${this.editor}
`;

    const url = this.titleFormControl.value
                  .split(' ')
                  .map(word => word.toLowerCase().replace(/[\s\/\-\:\,\.\!\@\#\$\%\^\&\*\(\)\'\"\?]/g, ''))
                  .filter(word => word !== '')
                  .join('-');
    this._postService.addPost(this.titleFormControl.value, this.username, url, post)
      .subscribe(
        data => {
          console.log(data);
          if (!data.error) {
              this.showSpinner = true;
              this.titleFormControl.reset();
              this.categoryFormControl.reset();
              this.tags = [
                { name: 'NodeJS' },
                { name: 'Angular' },
                { name: 'Javascript' }
              ];
              this.editor = '';
              setTimeout(() => {
                this.showSpinner = false;
                this._router.navigateByUrl('/posts');
              }, 500);
          }
        },
        error => {
          console.log(error);
        },
        () => {
          // console.log('Complete');
        }
      );
  }

  isBtnDisabled () {
    return this.titleFormControl.value === ''
      || this.categoryFormControl.value === ''
      || this.editor === '';
  }
}
