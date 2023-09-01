import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailRegex } from 'src/app/constants/regex.constant';
import { UserAccountDetails, UserData } from 'src/app/model/userData.model';
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
  public isLoading = false;
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
      this.isLoading = true;
      this.auth.login(this.loginForm.value.email as string, this.loginForm.value.password as string, this.loginForm.value.rememberMe as boolean)
      .subscribe({
        next: (data: UserAccountDetails): void => {
          this.isLoading = false;
          debugger;
          if(data.data.module === 'admin') {
            this.router.navigate(['./super-admin/customer']);
          }
        },
        error: (errorData) => {
          console.log(errorData);
          this.isLoading = false;
        }
      })
    }
  }

  forgetPassword() {
    this.router.navigate(['forget-password']);
  }
}
