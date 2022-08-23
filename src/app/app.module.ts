import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { WhishlistPageComponent } from './whishlist-page/whishlist-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchItemComponent } from './search-page/search-item/search-item.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    WhishlistPageComponent,
    SearchPageComponent,
    SearchItemComponent,
    MatDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeScreenComponent},
      { path: 'search-page', component: SearchPageComponent},
      { path: 'whishlist-page', component: WhishlistPageComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
