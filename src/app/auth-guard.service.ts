import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor (public _snackBar: MatSnackBar, private _router: Router) {}

    canActivate() {
        const user = window.localStorage.getItem('user');
    
        if (user) {
          return true;
        } else {
            const snackBarRef = this._snackBar.open('You need to login before going there.', '', {
                duration: 3000
            });
            this._router.navigateByUrl('/posts');
            return false;
        }
      }
}
