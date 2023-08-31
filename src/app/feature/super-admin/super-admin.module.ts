import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SocityBasicDetailsModule } from '../socity-basic-details/socity-basic-details.module';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminComponent,
    children: [
      {
        path: 'customer',
        loadChildren: () => import('../custumer-onbording/custumer-onbording.module').then(m => m.CustumerOnbordingModule)
      }
    ]
  },
]


@NgModule({
  declarations: [
    SuperAdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    SocityBasicDetailsModule,
    RouterModule.forChild(routes)
  ]
})
export class SuperAdminModule { }
