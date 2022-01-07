import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
import { Fiche } from '../models/fiche';
import { FicheService } from '../services/ficheServices/fiche.service';

@Component({
  selector: 'app-liste-fiches',
  templateUrl: './liste-fiches.component.html',
  styleUrls: ['./liste-fiches.component.css']
})
export class ListeFichesComponent implements OnInit {

  fiches: Fiche[]=[];
  ids :any;

  constructor(public afAuth: AngularFireAuth,private ficheService :FicheService, private router :Router) { }

  ngOnInit(): void {
    this.getFiches()
  }

  getFiches(): void {
    this.ficheService.getFicheListe().subscribe(res =>{
      this.fiches = res.map(e => {
        return {
          idFiche: e.payload.doc.id, ...e.payload.doc.data() as {}
        } as Fiche;
      })
    });
  }

  navigateTo(fiche: Fiche){
    console.log('fiche-couts/'+fiche.idFiche)
    this.router.navigate(['fiche-couts',fiche.idFiche]);
  }

  getFicheId(fiche : Fiche ){
    return this.ficheService.getID(fiche);
  }

}
