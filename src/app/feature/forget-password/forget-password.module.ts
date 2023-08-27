import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForgetPasswordComponent } from './forget-password.component';

const routes: Routes = [
  {
    path: '',
    component: ForgetPasswordComponent
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ForgetPasswordModule { }
