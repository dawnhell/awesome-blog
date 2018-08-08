import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from './../post/post.model';

import * as moment from 'moment';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts () {
    const author = window.localStorage.getItem('user');
    this._postsService.getPostsByAuthor(author)
      .subscribe(
        posts => {
          posts = posts.realPosts;
          for (let post in posts) {
            this.posts.push(new Post(
              posts[post].title,
              posts[post].tags,
              posts[post].category,
              moment(posts[post].date).format('MMMM Do YYYY, h:mm:ss a'),
              posts[post].content,
              posts[post].preview,
              posts[post].url,
              posts[post].slug
            ));
          }
        }
      );
  }
}
