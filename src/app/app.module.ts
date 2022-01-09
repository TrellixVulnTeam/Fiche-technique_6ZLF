import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListeFichesComponent } from './liste-fiches/liste-fiches.component';
import { DetailFicheComponent } from './detail-fiche/detail-fiche.component';
import { CreerFicheComponent } from './creer-fiche/creer-fiche.component';
import { Routes, RouterModule } from '@angular/router';
import { CreerEtapeComponent } from './creer-etape/creer-etape.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StockComponent } from './stock/stock.component';
import { AddToStockComponent } from './add-to-stock/add-to-stock.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';

//Barre de recherche
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//import services
import { FicheService } from './services/ficheServices/fiche.service'


import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from '../environments/environment';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {InfoCoutsComponent} from "./info-couts/info-couts.component";
import {DetailsFicheCoutsComponent} from "./details-fiche-couts/details-fiche-couts.component";
import { ListeEtapesComponent } from './liste-etapes/liste-etapes.component';
import { ModalComponent } from './modal/modal.component';
import { SearchComponent } from './search/search.component';
import { TicketComponent } from './ticket/ticket.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},  

  { path: 'liste-fiches', component: ListeFichesComponent },
  { path: 'liste-fiches/:nomRecette', component: ListeFichesComponent },

  { path: 'creer-fiche', component: CreerFicheComponent },

  // { path: 'creer-fiche/creer-etape', component: CreerEtapeComponent },
  { path: 'creer-etape', component: CreerEtapeComponent },
  { path: 'stock', component: StockComponent },
  { path: 'addstock', component: AddToStockComponent },
  { path: 'info-couts', component: InfoCoutsComponent },

  { path: 'liste-etapes/:id', component: ListeEtapesComponent },

  //Should be done based on ids
  { path: 'details-fiche/:idDetail', component: DetailFicheComponent },
  { path: 'fiche-couts/:id', component: DetailsFicheCoutsComponent },
  { path: 'ticket/:idticket', component: TicketComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeFichesComponent,
    DetailFicheComponent,
    CreerFicheComponent,
    CreerEtapeComponent,
    StockComponent,
    AddToStockComponent,
    LoginComponent,
    SignupComponent,
    InfoCoutsComponent,
    DetailsFicheCoutsComponent,
    ListeEtapesComponent,
    ModalComponent,
    SearchComponent,
    TicketComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,

    AngularFireModule.initializeApp(environment.firebase),  // imports firebase/app needed for everything
    AngularFirestoreModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,

    BrowserAnimationsModule

  ],
  providers: [FicheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
