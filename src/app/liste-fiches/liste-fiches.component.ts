import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
import { FicheService } from '../services/ficheServices/fiche.service';

@Component({
  selector: 'app-liste-fiches',
  templateUrl: './liste-fiches.component.html',
  styleUrls: ['./liste-fiches.component.css']
})
export class ListeFichesComponent implements OnInit {

  fiches: any;
  ids :any;

  constructor(public afAuth: AngularFireAuth,private ficheService :FicheService, private router :Router) { }

  ngOnInit(): void {
    this.getFiches()
  }

  getFiches(): void {
    this.ficheService.getAll().snapshotChanges()
    .subscribe(data => {
      this.fiches = data;
    });
  }

  navigateTo(fiche: any){
    // console.log('fiche-couts/'+)
    this.router.navigate(['/fiche-couts']);
  }

  getFicheId(fiche : any ){
    return fiche.idFiche;
  }

}
