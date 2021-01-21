import { OsebaVrsticaComponent } from './oseba-vrstica/oseba-vrstica.component';
import { DomovService } from './domov.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomovComponent } from './domov/domov.component';
import { OsDanesComponent } from './os-danes/os-danes.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DodajComponent } from './dodaj/dodaj.component';
import { FooterComponent } from './footer/footer.component';
import { OsebaComponent } from './oseba/oseba.component';
import { OsebaService } from './oseba.service';
import { OsebaSkupajComponent } from './oseba-skupaj/oseba-skupaj.component';
import { PregledComponent } from './pregled/pregled.component';

@NgModule({
  declarations: [
    AppComponent,
    DomovComponent,
    OsDanesComponent,
    NavComponent,
    DodajComponent,
    FooterComponent,
    OsebaComponent,
    OsebaVrsticaComponent,
    OsebaSkupajComponent,
    PregledComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    OsebaService,
    DomovService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }