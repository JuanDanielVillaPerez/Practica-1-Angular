import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentepruebaComponent } from './componenteprueba/componenteprueba.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentepruebaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
