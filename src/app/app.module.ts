import { OsebjeService } from './osebje.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomovComponent } from './domov/domov.component';
import { OsDanesComponent } from './os-danes/os-danes.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DodajComponent } from './dodaj/dodaj.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DomovComponent,
    OsDanesComponent,
    NavComponent,
    DodajComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    OsebjeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
