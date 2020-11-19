import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { RouterModule } from '@angular/router';
import { ClassifyComponent } from './classify/classify.component';
import {  HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './services/apiservice.service';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ClassifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
