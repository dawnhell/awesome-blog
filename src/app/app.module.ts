import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

import { AuthService } from './auth.service';
import { PostsService } from './posts.service';
import { WritePostComponent } from './write-post/write-post.component';
import { MyPostsComponent } from './my-posts/my-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    PostsComponent,
    PostComponent,
    WritePostComponent,
    MyPostsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
