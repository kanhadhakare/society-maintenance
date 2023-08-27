import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './feature/aboutus/aboutus.component';
import { ServicesComponent } from './feature/services-component/services.component';
import { ContactComponent } from './feature/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./feature/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'about',
    component: AboutusComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contacts',
    component: ContactComponent
  },
  {
    path: 'register',
    loadChildren: () => import('./feature/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./feature/forget-password/forget-password.module').then(m => m.ForgetPasswordModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
