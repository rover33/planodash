import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ErrorLogComponent } from './error-log/error-log.component'
import { RequestLogComponent } from './request-log/request-log.component';

import { MatCardModule, MatTabsModule, MatListModule, MatList } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ErrorLogComponent,
    RequestLogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
