import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustumerOnbordingComponent } from './custumer-onbording.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CustumerOnbordingComponent
  },
]


@NgModule({
  declarations: [CustumerOnbordingComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CustumerOnbordingModule { }
