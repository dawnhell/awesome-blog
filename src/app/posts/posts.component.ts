import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from './../post/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts () {
    this._postsService.getPosts()
      .subscribe(
        posts => {
          posts = posts.posts;
          for (let post in posts) {
            this.posts.push(new Post(
              posts[post].title,
              posts[post].tags,
              posts[post].category,
              posts[post].date,
              posts[post].content,
              posts[post].preview,
              posts[post].url,
              posts[post].slug
            ));
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
}
