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
import { WritePostComponent } from './write-post/write-post.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { ReadPostComponent } from './read-post/read-post.component';
import { AboutComponent } from './about/about.component';

import { AuthService } from './auth.service';
import { PostsService } from './posts.service';
import { AuthGuardService } from './auth-guard.service';

import { LMarkdownEditorModule } from 'ngx-markdown-editor';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    PostsComponent,
    PostComponent,
    WritePostComponent,
    MyPostsComponent,
    ReadPostComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    LMarkdownEditorModule
  ],
  providers: [
    AuthService,
    PostsService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
