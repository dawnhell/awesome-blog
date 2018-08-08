import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class PostsService {
    constructor (private _httpClient: HttpClient) {}

    getPosts (): Observable<any> {
        return this._httpClient.get('/api/posts');
    }

    getPost (title: string): Observable<any> {
        return this._httpClient.get('/api/post/' + title);
    }

    getPostsByAuthor (author: string): Observable<any> {
        return this._httpClient.get('/api/posts-by-author?author=' + author);
    }

    addPost (title: string, author: string, url: string, post: string): Observable<any> {
        const body = new URLSearchParams();
        body.set('title', title);
        body.set('author', author);
        body.set('url', url);
        body.set('post', post);
        return this._httpClient.post('/add-post', body.toString(), httpOptions);
    }

    readPost (title: string): Observable<any> {
        const body = new URLSearchParams();
        body.set('title', title);
        return this._httpClient.post('/read-post', body.toString(), httpOptions);
    }
}
