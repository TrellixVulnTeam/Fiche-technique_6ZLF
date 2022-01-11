import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Etape } from '../models/etape';
import { Fiche } from '../models/fiche';
import { FicheService } from '../services/ficheServices/fiche.service';


@Component({
  selector: 'app-detail-fiche',
  templateUrl: './detail-fiche.component.html',
  styleUrls: ['./detail-fiche.component.css']
})
export class DetailFicheComponent implements OnInit {

  @Input() fiche?: Fiche;

  id !: string | null;
  ficheCouts !: any ;
  ficheAvecCouts !: string | null;

  constructor(private router: Router,private route: ActivatedRoute,private ficheService :FicheService) {
    this.id = this.route.snapshot.paramMap.get('idDetail')
    this.ficheAvecCouts = '/fiche-couts'+'/'+this.id

  }

  ngOnInit(): void {
    this.ficheService.getFicheByID(this.id).subscribe(res =>{
      this.fiche = res;
      console.log(res)
    })
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
  
  printComponent(){
    window.print();
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


}
