import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from './../post/post.model';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css']
})
export class ReadPostComponent implements OnInit {
  post: Post = null;

  constructor(private _activatedRoute: ActivatedRoute, private _postsService: PostsService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost () {
    const id = this._activatedRoute.snapshot.paramMap.get('id');

    this._postsService.getPost(id)
      .subscribe(
        post => {
          post = post.post;
          this.post = new Post(post.title, post.tags, post.category, post.date, post.content, post.preview, post.url, post.slug);
        },
        error => {
          console.log(error);
        },
        () => {
          // console.log('Complete');
        }
      );
  }
}
