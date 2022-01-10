import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Cout } from '../models/Couts/cout';
import { Etape } from '../models/etape';
import { Fiche } from '../models/fiche';
import { CoutsService } from '../services/couts.service';
import { FicheService } from '../services/ficheServices/fiche.service';

@Component({
  selector: 'app-details-fiche-couts',
  templateUrl: './details-fiche-couts.component.html',
  styleUrls: ['./details-fiche-couts.component.css']
})
export class DetailsFicheCoutsComponent implements OnInit {

  @Input() fiche?: Fiche;

  id !: string | null;
  ficheSansCouts !: string |null;

  listeFiches : Fiche[] =[];

  listeIg : string[]=[]

  list : Cout[]=[];

  constructor(private router: Router,private route: ActivatedRoute,private ficheService :FicheService,  public coutService: CoutsService) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.ficheSansCouts = '/details-fiche'+'/'+this.id

  }

  ngOnInit(): void {
    this.ficheService.getFicheByID(this.id).subscribe(res =>{
      this.fiche = res;
      console.log(res)
    })
  }

  printComponent(){
    window.print();
  }
  
  ListeIngredsEtape(etape :Etape){
    var map = new Map;
    map.set('ingredient',etape.Ingredients)
    for(let x of map.keys()){
      let ingr = map.get(x);
      console.log(ingr);
      return ingr
    }
    return "rien"
  }

  TempsTotal(fiche : Fiche) : number {
    var total = 0
    for(var ing of fiche.etape){
      let x = +ing.temps
      total += x
    }
    if(total >= 60){
      total = total / 60;
    }
    return total;
  }

  getCouts(){
    this.coutService.getListeCouts().subscribe(res =>{
      this.list = res.map(e => {
        return {
          idCout: e.payload.doc.id, ...e.payload.doc.data() as {}
        } as Cout;
      })
    });
  }

}


