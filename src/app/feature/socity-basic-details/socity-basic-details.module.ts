import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocityBasicDetailsComponent } from '../socity-basic-details/socity-basic-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SocityBasicDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    SocityBasicDetailsComponent
  ]
})
export class SocityBasicDetailsModule { }
