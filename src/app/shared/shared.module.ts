import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialExampleModule } from 'src/material-example.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    RouterModule
  ], exports: [
    HeaderComponent,
    MaterialExampleModule
  ]
})
export class SharedModule { }
