import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustumerOnbordingComponent } from './custumer-onbording/custumer-onbording.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminComponent,
    children: [
      {
        path: 'customer',
        loadChildren: () => import('./custumer-onbording/custumer-onbording.module').then(m => m.CustumerOnbordingModule)
      }
    ]
  },
]


@NgModule({
  declarations: [
    SuperAdminComponent,
    CustumerOnbordingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SuperAdminModule { }
