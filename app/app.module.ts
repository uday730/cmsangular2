import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { RouterModule, Routes } from '@angular/router';
 import {FormsModule} from '@angular/forms';

import { AppComponent }   from './app.component';
import {LoginComponent} from '../src/login.component';
import {AppRoutingModule} from './app.routing.module';
import {DashboardComponent} from '../src/Dashboard/dashboard.component';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,FormsModule ],
  declarations: [ AppComponent,LoginComponent 
              ,DashboardComponent,],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
