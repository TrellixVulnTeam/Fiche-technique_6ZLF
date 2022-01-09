import { Component, OnInit} from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieFiche } from '../models/Categorie/categorie-fiche';
import { Fiche } from '../models/fiche';
import { CategorieFicheService } from '../services/Catégorie/categorie-fiche.service';
import { FicheService } from '../services/ficheServices/fiche.service';

@Component({
  selector: 'app-liste-fiches',
  templateUrl: './liste-fiches.component.html',
  styleUrls: ['./liste-fiches.component.css']
})
export class ListeFichesComponent implements OnInit {

  searchText!: any;

  //Tableau des Categories récupérée  
  Categorie : CategorieFiche[] = [];

  fiches: Fiche[]=[];
  ids :any;

  constructor(public afAuth: AngularFireAuth,private ficheService :FicheService, private router :Router, private categorieService : CategorieFicheService,
    private route : ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.getFiches()
    this.getCategories()
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

  getCategories() : void {
    this.categorieService.getCategorieListe().subscribe(res =>{
      this.Categorie = res.map(e => {
        return {
          idCatFiche: e.payload.doc.id, ...e.payload.doc.data() as {}
        } as CategorieFiche;
      })
    });
    console.log(this.Categorie)
  }

  navigateTo(fiche: Fiche){
    console.log('fiche-couts/'+fiche.idFiche)
    this.router.navigate(['fiche-couts',fiche.idFiche]);
  }

  getFicheId(fiche : Fiche ){
    return this.ficheService.getID(fiche);
  }

  getFicheByCategorie(categorie : any){
    console.log(categorie)
  }

  delete(fiche: Fiche){
    return this.ficheService.delete(fiche);
  }

}
