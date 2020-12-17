import { DodajComponent } from './dodaj/dodaj.component';
import { DomovComponent } from './domov/domov.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OsebaComponent } from './oseba/oseba.component';

const routes: Routes = [
  {path: '', component: DomovComponent},
  {path: 'dodaj', component: DodajComponent},
  {path: ':emso/:leto/:mesec', component: OsebaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
