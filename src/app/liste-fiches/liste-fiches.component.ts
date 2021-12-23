import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FicheService } from '../services/ficheServices/fiche.service';

@Component({
  selector: 'app-liste-fiches',
  templateUrl: './liste-fiches.component.html',
  styleUrls: ['./liste-fiches.component.css']
})
export class ListeFichesComponent implements OnInit {

  fiches: any;

  constructor(public afAuth: AngularFireAuth,private ficheService :FicheService) { }

  ngOnInit(): void {
    this.getFiches()
  }

  getFiches(): void {
    this.ficheService.getAll().snapshotChanges()
    .subscribe(data => {
      this.fiches = data;
    });
  }

}
