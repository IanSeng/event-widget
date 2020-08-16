import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPage {
  signupForm: FormGroup;
  error: string;
  success: string;
  constructor(private authService: AuthService, private router: Router) {
    this.initForm();
  }

  initForm() {
    const name = '';
    const email = '';
    const password = '';
    this.signupForm = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      email: new FormControl(email, [Validators.required, Validators.email]),
      password: new FormControl(password, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSignup() {
    this.authService
      .register({
        ...this.signupForm.value,
        name: this.toTitleCase(this.signupForm.value.name),
      })
      .then(() => {
        this.success =
          'Sign up successful. You may now log out from this account and log back in with your new account';
      })
      .catch(() => {
        this.error = 
          'Something Went Wrong. Please try again later'
      })
  }

  toTitleCase(text: string) {
    return text.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
