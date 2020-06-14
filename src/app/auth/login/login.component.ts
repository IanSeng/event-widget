import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error = '';
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    const email = '';
    const password = '';
    this.loginForm = new FormGroup({
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'password': new FormControl(password, Validators.required),
    })
  }

  onLogin() {
    this.isLoading = true;
    this.authService.login(this.loginForm.value).then(
      response => {
        this.isLoading = false;
        this.router.navigate(['/home']);
      }).catch(error => {
        this.isLoading = false;
        this.error = 'Incorrect Credentials';
      })
    //this.authService.login('abc@abc.com', 'abc123');
  }


}
