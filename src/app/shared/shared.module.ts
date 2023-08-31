import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialExampleModule } from 'src/material-example.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNavMenuItemComponent } from './side-nav-menu-item/side-nav-menu-item.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideNavMenuItemComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    RouterModule,
    ReactiveFormsModule,
  ], exports: [
    HeaderComponent,
    MaterialExampleModule,
    SideNavMenuItemComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
