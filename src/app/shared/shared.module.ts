import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialExampleModule } from 'src/material-example.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    RouterModule,
    ReactiveFormsModule,
  ], exports: [
    HeaderComponent,
    MaterialExampleModule
  ]
})
export class SharedModule { }
