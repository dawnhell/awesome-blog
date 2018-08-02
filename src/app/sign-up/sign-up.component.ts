import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class SignUpErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  @Input() isVisible: boolean;
  @Output() toggleVisibility = new EventEmitter();

  hide = true;
  hideAgain = true;

  usernameFormControl = new FormControl('', [
    Validators.required
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  passwordAgainFormControl = new FormControl('', [
    Validators.required
  ]);

  usernameMatcher = new SignUpErrorStateMatcher();
  emailMatcher = new SignUpErrorStateMatcher();
  passwordMatcher = new SignUpErrorStateMatcher();
  passwordAgainMatcher = new SignUpErrorStateMatcher();

  handleMouseClick (event) {
    if (event.srcElement.className.includes('sign-up-wrapper') ||
      event.srcElement.className.includes('close-icon')) {
      this.toggleVisibility.emit();
    }
  }
}
