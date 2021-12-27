import { Component } from '@angular/core';
import {FicheService} from './services/ficheServices/fiche.service';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetAwi';
}
