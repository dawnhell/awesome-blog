import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { WritePostComponent } from './write-post/write-post.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { ReadPostComponent } from './read-post/read-post.component';
import { AboutComponent } from './about/about.component';

import { AuthGuardService } from './auth-guard.service';

const routes:Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'read/:id',
    component: ReadPostComponent
  },
  {
    path: 'write-post',
    canActivate: [AuthGuardService],
    component: WritePostComponent
  },
  {
    path: 'my-posts',
    canActivate: [AuthGuardService],
    component: MyPostsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
