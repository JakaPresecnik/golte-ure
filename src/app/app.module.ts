import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomovComponent } from './domov/domov.component';
import { OsDanesComponent } from './os-danes/os-danes.component';

@NgModule({
  declarations: [
    AppComponent,
    DomovComponent,
    OsDanesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
