import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PostsService {
    constructor (private _httpClient: HttpClient) {}

    getPosts (): Observable<any> {
        return this._httpClient.get('/posts');
    }

    getPost (postName: string): Observable<any> {
        return this._httpClient.get('/post/' + postName);
    }
}
