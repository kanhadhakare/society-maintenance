import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SocityBlockDetailsComponent } from './socity-block-details.component';



@NgModule({
  declarations: [
    SocityBlockDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    SocityBlockDetailsComponent
  ]
})
export class SocityBlockDetailsModule { }
