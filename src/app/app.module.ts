import { OsebaVrsticaComponent } from './oseba-vrstica/oseba-vrstica.component';
import { DomovService } from './domov.service';
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
import { OsebaComponent } from './oseba/oseba.component';
import { OsebaService } from './oseba.service';

@NgModule({
  declarations: [
    AppComponent,
    DomovComponent,
    OsDanesComponent,
    NavComponent,
    DodajComponent,
    FooterComponent,
    OsebaComponent,
    OsebaVrsticaComponent
  ],
  imports: [
    BrowserModule,
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