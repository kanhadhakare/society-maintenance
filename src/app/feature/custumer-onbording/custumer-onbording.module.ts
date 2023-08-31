import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustumerOnbordingComponent } from './custumer-onbording.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SocityBasicDetailsModule } from '../socity-basic-details/socity-basic-details.module';

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
    SharedModule,
    SocityBasicDetailsModule,
    RouterModule.forChild(routes)
  ]
})
export class CustumerOnbordingModule { }
