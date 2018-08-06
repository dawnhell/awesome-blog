import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class AuthService {
  private signUpUrl = '/signup';
  private signInUrl = '/signin';

  constructor (private _httpClient: HttpClient) {}

  signUp (email: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
    return this._httpClient.post(this.signUpUrl, body.toString(), httpOptions);
  }

  signIn (email: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
    return this._httpClient.post(this.signInUrl, body.toString(), httpOptions);
  }
}
