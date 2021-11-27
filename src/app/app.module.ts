import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListeFichesComponent } from './liste-fiches/liste-fiches.component';
import { DetailFicheComponent } from './detail-fiche/detail-fiche.component';
import { CreerFicheComponent } from './creer-fiche/creer-fiche.component';
import { Routes, RouterModule } from '@angular/router';
import { CreerEtapeComponent } from './creer-etape/creer-etape.component';
import { InfoCoutsComponent } from './info-couts/info-couts.component';

const appRoutes: Routes = [
  { path: '', component: ListeFichesComponent },
  { path: 'creer-fiche', component: CreerFicheComponent },
  { path: 'detail-fiche', component: DetailFicheComponent },
  { path: 'creer-fiche/creer-etape', component: CreerEtapeComponent },
  { path: 'info-couts', component: InfoCoutsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeFichesComponent,
    DetailFicheComponent,
    CreerFicheComponent,
    CreerEtapeComponent,
    InfoCoutsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
