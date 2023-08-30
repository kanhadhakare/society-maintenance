import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailRegex } from 'src/app/constants/regex.constant';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(false)
  });

  public readonly emailRegex = emailRegex;
  // public readonly mobileRegex = mobileRegex;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    // const url = '/api/states?page=0&size=20'
    // this.http.get(url).subscribe(data => {
    //   console.log(data);
    // })
  }

  loginSubmit() {
    if(this.loginForm.valid) {
      // this.auth.login(this.loginForm.value.email as string, this.loginForm.value.password as string, this.loginForm.value.rememberMe as boolean)
      this.router.navigate(['./super-admin'])
    }
  }

  forgetPassword() {
    this.router.navigate(['forget-password']);
  }
}
