import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent, 
    MatDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
