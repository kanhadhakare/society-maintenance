import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-socity-block-details',
  templateUrl: './socity-block-details.component.html',
  styleUrls: ['./socity-block-details.component.scss']
})
export class SocityBlockDetailsComponent implements OnInit {

  public societyBlockDetailsForm = this.fb.group({
    numberOfTowers: [null, Validators.required]
  });

  constructor(private readonly fb:  FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.societyBlockDetailsForm.value);
  }

}
