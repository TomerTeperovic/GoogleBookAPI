import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { SearchItemComponent } from './search-item/search-item.component';


const routes: Routes = [
  { path: '', component: SearchComponent }
];

@NgModule({
  declarations: [
    SearchComponent,
    SearchItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SearchModule { }
