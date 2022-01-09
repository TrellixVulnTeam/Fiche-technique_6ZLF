import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Etape } from '../models/etape';
import { EtapesService } from '../services/Etapes/etapes.service';
import { CreerEtapeComponent } from '../creer-etape/creer-etape.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FicheService } from '../services/ficheServices/fiche.service';


@Component({
  selector: 'app-liste-etapes',
  templateUrl: './liste-etapes.component.html',
  styleUrls: ['./liste-etapes.component.css']
})
export class ListeEtapesComponent implements OnInit {

  //Tableau étapes ajoutés à la fiche
  EtapesFiche : Etape[] =[]

  //Tableau des étapes récupérée  
  etapes : Etape[] = [];

  //Show formulaire ajouter étape et détail étape
  isShown: boolean = false;
  show: boolean = false;

  //id De la fiche où on ajoute les étapes
  id !: string  | null;

  constructor( private etapeService : EtapesService, 
    private router : Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private ficheService : FicheService) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.getEtapes()
  }

  toggleShow(){
    this.isShown = ! this.isShown;
  }

  ShowDetailEtape(){
    this.show = ! this.show;
  }
  
  getEtapes() : void {
    this.etapeService.getEtapeListe().subscribe(res =>{
      this.etapes = res.map(e => {
        return {
          idEtape: e.payload.doc.id, ...e.payload.doc.data() as {}
        } as Etape;
      })
    });
  }

  Ajouter(etape : Etape){
    this.EtapesFiche.push(etape)
    console.log(this.EtapesFiche)
  }

  Submit(){
    this.ficheService.updateEtapes(this.id,this.EtapesFiche);
    console.log('Fiche updated succesfulyyy!')
    this.router.navigate(['liste-fiches']);
  }

  SupprimerEtape(etape : Etape){
    return this.etapeService.delete(etape);
  }

}
