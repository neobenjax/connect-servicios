import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { FormsModule } from '@angular/forms'
import  { HttpModule } from '@angular/http'


import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { FotoComponent }  from './components/foto.component';
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent,UserComponent,FotoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
