import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailRegex, mobileRegex } from 'src/app/constants/regex.constant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    socityOrOwner: new FormControl('', Validators.required),
  });

  public readonly emailRegex = emailRegex;
  public readonly mobileRegex = mobileRegex;


  constructor() { }

  ngOnInit(): void {
  }

  registerSubmit(): void {
    console.log('register')
  }

}
