import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  { path: '', component: WelcomeComponent }
];

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WelcomeModule { }
