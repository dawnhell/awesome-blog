import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

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

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  emailMatcher = new SignInErrorStateMatcher();
  passwordMatcher = new SignInErrorStateMatcher();

  handleMouseClick (event) {
    if (event.srcElement.className.includes('sign-in-wrapper') ||
      event.srcElement.className.includes('close-icon')) {
      this.toggleVisibility.emit();
    }
  }
}
