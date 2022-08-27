import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MatDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
      { path: 'wishlist', loadChildren: () => import('./wishlist/wishlist.module').then(m => m.WishlistModule) },
      { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
      { path: '', redirectTo: '', pathMatch: 'full' }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
