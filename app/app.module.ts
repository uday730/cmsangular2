import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';
import {LoginComponent} from '../src/login.component';
import {AppRoutingModule} from './app.routing.module';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule ],
  declarations: [ AppComponent,LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
