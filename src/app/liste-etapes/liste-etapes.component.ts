import { Component, OnInit } from '@angular/core';
import { Etape } from '../models/etape';
import { EtapesService } from '../services/Etapes/etapes.service';
import { CreerEtapeComponent } from '../creer-etape/creer-etape.component';


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

  isShown: boolean = false;
  show: boolean = false;

  constructor( private etapeService : EtapesService) { }

  ngOnInit(): void {
    this.getEtapes()
  }

  toggleShow(){
    this.isShown = ! this.isShown;
  }

  ShowDetailEtape(etape : Etape){
    this.show = ! this.show;
    // this.etapeService.getEtapeByID()
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


  SupprimerEtape(etape : Etape){
    return this.etapeService.delete(etape);
  }

}
