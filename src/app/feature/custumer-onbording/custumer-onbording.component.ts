import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailRegex, mobileRegex } from 'src/app/constants/regex.constant';

@Component({
  selector: 'app-custumer-onbording',
  templateUrl: './custumer-onbording.component.html',
  styleUrls: ['./custumer-onbording.component.scss']
})
export class CustumerOnbordingComponent implements OnInit {

  public societyBasicDetailsForm = this.fb.group({
    customerName: ['', Validators.required],
    customerEmail: ['', Validators.required],
    customerMobile: [null, Validators.required],
    societyName: ['', Validators.required],
    societyEmail: [null, Validators.required],
    societyPhone: [null, Validators.required],
    societyRegistrationNumber: [null, Validators.required],
    societyGstNumber: [null, Validators.required],
    societyAddress: this.fb.group({
      sector: ['', Validators.required],
      city: ['', Validators.required],
      state: [''],
      pincode: [null, Validators.required]
    })
  })

  public emailRegex = emailRegex;
  public mobileRegex = mobileRegex
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.societyBasicDetailsForm.value);
  }

}
