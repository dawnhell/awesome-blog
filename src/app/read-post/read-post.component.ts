import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from './../post/post.model';

import { PostsService } from '../posts.service';
import * as moment from 'moment';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css']
})
export class ReadPostComponent implements OnInit {
  post: Post = null;
  postAuthor: string = null;

  constructor(private _activatedRoute: ActivatedRoute, private _postsService: PostsService, private _location: Location) { }

  ngOnInit() {
    this.getPost();
  }

  getPost () {
    const id = this._activatedRoute.snapshot.paramMap.get('id');

    this._postsService.getPost(id)
      .subscribe(
        post => {
          post = post.post;
          this.post = new Post(post.title, post.tags, post.category, moment(post.date).format('MMMM Do YYYY, h:mm:ss a'), post.content, post.preview, post.url, post.slug);

          this._postsService.readPost(this.post.slug)
            .subscribe(
              post => {
                  if (post.post.author) {
                    this.postAuthor = post.post.author;
                  }
              },
              error => {
                  console.log(error);
              },
              () => {
                  // console.log('Comlete');
              }
            );
        },
        error => {
          console.log(error);
        },
        () => {
          // console.log('Complete');
        }
      );
  }

  goBack () {
    this._location.back();
  }
}
