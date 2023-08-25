import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './feature/aboutus/aboutus.component';
import { ServicesComponent } from './feature/services/services.component';
import { ContactComponent } from './feature/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home-page',
  },
  {
    path: 'home-page',
    loadChildren: () => import('./feature/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./feature/register/register.module').then(m => m.RegisterModule)
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
