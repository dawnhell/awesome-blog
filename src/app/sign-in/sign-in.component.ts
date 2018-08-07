import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '../auth.service';

export class SignInErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {
  @Input() isVisible: boolean;
  @Output() toggleVisibility = new EventEmitter();

  hide = true;
  isSignedIn: boolean = true;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  emailMatcher = new SignInErrorStateMatcher();
  passwordMatcher = new SignInErrorStateMatcher();

  constructor (private _authService: AuthService) {}

  handleMouseClick (event) {
    if (event.srcElement.className.includes('sign-in-wrapper') ||
      event.srcElement.className.includes('close-icon')) {
      this.toggleVisibility.emit();
    }
  }

  signIn () {
    this._authService.signIn(this.emailFormControl.value, this.passwordFormControl.value)
      .subscribe(
        data => {
          console.log('Authenticated', data);
          if (data.error) {
            this.isSignedIn = false;
          } else {
            this.isSignedIn = true;
            this.toggleVisibility.emit(data);
            this.emailFormControl.reset();
            this.passwordFormControl.reset();
            window.sessionStorage.accessToken = data.token;
            window.localStorage.setItem("user", data.email);
          }
        },
        error => {
          console.log(error);
        },
        () => {
          console.log('Complete');
        }
      );
  }

  isBtnDisabled () {
    return this.emailFormControl.hasError('email')
      || this.emailFormControl.hasError('required')
      || this.passwordFormControl.hasError('required');
  }
}
